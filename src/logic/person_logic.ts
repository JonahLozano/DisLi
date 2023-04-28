import { NextFunction, Request, Response } from "express";
import create_profile_view from "../view/profile/view_profile";
import create_profile_checkout_view from "../view/profile/view_profile_checkout";
import { Person } from "../entity/person";
import { Item } from "../entity/item";
import { DeviceStatus } from "../utils/DeviceStatus";
import { Checkout } from "../entity/checkout";
import { LessThan } from "typeorm";

const view_person = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const university_id = "0000-0000-0000-0001";
    const person_details = await Person.findOneBy({ university_id });

    const profile_page = new create_profile_view();

    const appointments = await Person.createQueryBuilder("person")
      .innerJoinAndSelect("person.checkout", "checkout")
      .innerJoinAndSelect("checkout.item", "item")
      .where("person.university_id = :university_id", {
        university_id: person_details!.university_id,
      })
      .andWhere("item.status = :status", {
        status: DeviceStatus.RESERVED,
      })
      .getOne();

    const myDevices = await Person.createQueryBuilder("person")
      .innerJoinAndSelect("person.checkout", "checkout")
      .innerJoinAndSelect("checkout.item", "item")
      .where("person.university_id = :university_id", {
        university_id: person_details!.university_id,
      })
      .andWhere("item.status = :status", {
        status: DeviceStatus.CHECKEDOUT,
      })
      .getOne();

    appointments?.checkout.forEach((checkout, idx) => {
      const checkout_date = checkout.checkout_date;
      const university_id = appointments.university_id;

      profile_page.addTableRow(idx + 1, university_id, checkout_date);
    });

    myDevices?.checkout.forEach((checkout) => {
      const { return_date } = checkout;
      const { brand, model, code_name } = checkout.item;
      profile_page.addCardItem(brand, model, code_name, return_date);
    });

    res.status(200).json(profile_page.getData());
  } catch (err) {
    next(err);
  }
};

const view_checkout = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const university_id = "0000-0000-0000-0001";
    // const person_details = await Person.findOneBy({ university_id });

    const profile_page = new create_profile_checkout_view();

    res.status(200).json(profile_page.getData());
  } catch (err) {
    next(err);
  }
};

const checkout_item = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get data from request that shows what item is being attempted to be checked out
    const { brand, model, code_name, checkout_date, checkout_time } = req.body;
    console.log(req.body);

    // find user by university_id, in this case it is hardcoded; normally sent in jwt
    const university_id = "0000-0000-0000-0001";
    // find person object
    const person_details = await Person.findOneBy({ university_id });

    // find device object
    const device_details = await Item.findOneBy({
      brand,
      model,
      code_name,
      status: DeviceStatus.AVAILIABLE,
    });

    // creating return date and return time (appointment_time)
    const return_date = new Date(checkout_date);
    return_date.setMonth(return_date.getMonth() + 6);

    const mill2hrsNmins = (milliseconds: number) => {
      const hours = Math.floor(milliseconds / (60 * 60 * 1000));
      const minutes = Math.floor(milliseconds / (60 * 1000)) % 60;
      return { hours, minutes };
    };

    const { hours, minutes } = mill2hrsNmins(checkout_time);

    const appointment_time = new Date(checkout_date);
    appointment_time.setHours(hours);
    appointment_time.setMinutes(minutes);

    // create checkout object with person_id and device_id
    const checkout_details = Checkout.create({
      item: device_details!,
      university_id: person_details!,
      return_date,
      checkout_date: appointment_time,
    });
    console.log(checkout_details);

    // insert checkout object
    await Checkout.insert(checkout_details);

    // update device status to reserved
    await Item.update(
      { serial_number: device_details!.serial_number },
      { status: DeviceStatus.RESERVED }
    );

    // return checkout object
    res.status(200).json({});
  } catch (err) {
    next(err);
  }
};

// Approve checkouts
const approve_checkout = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // given the id of the item to be checked out
    // change status from "Pending" to "Checkedout"
    const { serial_number } = _req.body;
    const existing_item = await Item.findOneByOrFail({ serial_number });

    Object.assign(existing_item, {
      status: DeviceStatus.CHECKEDOUT,
    });

    await Item.update({ serial_number }, existing_item);

    res.status(200).json({ existing_item });
  } catch (err) {
    next(err);
  }
};
// View checkouts
const view_all_checkout = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // given nothing display all pending items
    const device_details = await Item.findBy({
      status: DeviceStatus.RESERVED,
    });

    res.status(200).json({ devices: device_details });
  } catch (err) {
    next(err);
  }
};

// TODO: removed old checkouts
const clean_checkouts = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // given nothing display all pending items
    const currentDateMinus15Minutes = new Date();
    currentDateMinus15Minutes.setMinutes(
      currentDateMinus15Minutes.getMinutes() - 15
    );

    const device_details = await Checkout.findBy({
      checkout_date: LessThan(currentDateMinus15Minutes),
    });

    res.status(200).json({ devices: device_details });
  } catch (err) {
    next(err);
  }
};

export = {
  clean_checkouts,
  view_all_checkout,
  approve_checkout,
  view_person,
  view_checkout,
  checkout_item,
};
