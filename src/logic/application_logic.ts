import { NextFunction, Request, Response } from "express";
import { Application } from "../entity/application";
import { Person } from "../entity/person";
import { Item } from "../entity/item";
import create_appointments_view from "../view/application/view_appointments";
import { DeviceStatus } from "../utils/DeviceStatus";

const view_all_applications = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const item_details = await Application.findBy({});

    res.status(200).json(item_details);
  } catch (err) {
    next(err);
  }
};

const view_application = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const item_details = await Application.findOneByOrFail({ id });

    res.status(200).json(item_details);
  } catch (err) {
    next(err);
  }
};

const add_application = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { brand, model, university_id } = req.body;

    const aPerson = await Person.findOneByOrFail(university_id);

    await Item.findOneByOrFail({ brand, model });

    const new_application = Application.create({
      brand,
      model,
      university_id: aPerson,
    });

    await Application.insert(new_application);

    res.status(201).json(new_application);
  } catch (err) {
    next(err);
  }
};

// function to accept or decline an application
/*
const decide_on_application = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //const { application_id, decision } = req.body;

    // NEW CODE
    // instead find the application by application id
    const program_details = await Application.update(
      { application_id },
      { status: decision }
    )

    res.status(200).json({});

    // OLD CODE
    const program_details = await Application.update(
      { brand, model, university_id },
      { status: decision }
    );
    
  } catch (err) {
    next(err);
  }
};
*/

const view_appointments = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const admin_appointment_page = new create_appointments_view();

    const appointments = await Person.createQueryBuilder("person")
      .innerJoinAndSelect("person.checkout", "checkout")
      .innerJoinAndSelect("checkout.item", "item")
      .where("item.status = :status", {
        status: DeviceStatus.RESERVED,
      })
      .getMany();

    let appCnt = 1;
    appointments.forEach((appointment) => {
      appointment.checkout.forEach((checkout) => {
        const checkout_date = checkout.checkout_date;
        const university_id = appointment.university_id;
        const application_id = checkout.id;
        const item = checkout.item;
        const return_date = checkout.return_date;

        admin_appointment_page.addAppointment(
          appCnt++,
          application_id,
          university_id,
          `${item.brand} - ${item.model}`,
          checkout_date,
          return_date
        );
      });
    });

    res.status(200).json(admin_appointment_page.getData());
  } catch (err) {
    next(err);
  }
};

export = {
  view_all_applications,
  view_application,
  add_application,
  //decide_on_application,
  view_appointments,
};
