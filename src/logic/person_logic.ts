import { Request, Response } from "express";
import { logger } from "../index";
import create_profile_view from "../view/view_profile";
import create_profile_checkout_view from "../view/view_profile_checkout";
import { Person } from "../entity/person";
import { Item } from "../entity/item";
import { DeviceStatus } from "../utils/DeviceStatus";
import { Checkout } from "../entity/checkout";

const view_person = async (_req: Request, res: Response) => {
  try {
    const university_id = "0000-0000-0000-0001";
    const person_details = await Person.findOneBy({ university_id });

    const profile_page = new create_profile_view();

    const appointments = await Person.createQueryBuilder("person")
      .innerJoinAndSelect("person.checkout", "checkout")
      .innerJoinAndSelect("checkout.item", "item")
      .where("person.university_id = :university_id", {
        university_id: person_details!.university_id,
        status: DeviceStatus.RESERVED,
      })
      .getOne();

    const myDevices = await Person.createQueryBuilder("person")
      .innerJoinAndSelect("person.checkout", "checkout")
      .innerJoinAndSelect("checkout.item", "item")
      .where("person.university_id = :university_id", {
        university_id: person_details!.university_id,
        status: DeviceStatus.CHECKEDOUT,
      })
      .getOne();

    appointments?.checkout.forEach((checkout) => {
      const { checkout_date, university_id } = checkout;
      // const { brand, model, code_name } = checkout.item;
      profile_page.addTableRow(university_id.university_id, checkout_date);
    });

    myDevices?.checkout.forEach((checkout) => {
      const { return_date } = checkout;
      const { brand, model, code_name } = checkout.item;
      profile_page.addCardItem(brand, model, code_name, return_date);
    });

    res.status(200).json(profile_page.getData());
  } catch (err) {
    logger.error(err);
    res.status(404).send("ERROR");
  }
};

const view_checkout = async (_req: Request, res: Response) => {
  try {
    // const university_id = "0000-0000-0000-0001";
    // const person_details = await Person.findOneBy({ university_id });

    const profile_page = new create_profile_checkout_view();

    res.status(200).json(profile_page.getData());
  } catch (err) {
    logger.error(err);
    res.status(404).send("ERROR");
  }
};

const checkout_item = async (_req: Request, res: Response) => {
  try {
    // get data from request that shows what item is being attempted to be checked out
    const { brand, model, code_name, checkout_date, checkout_time } = _req.body;

    // find user by university_id, in this case it is hardcoded; normally sent in jwt
    const university_id = "0000-0000-0000-0001";

    // find person object
    const person_details = await Person.findOneBy({ university_id });

    // const profile = await Person.createQueryBuilder("person")
    //   .innerJoinAndSelect("person.checkout", "checkout")
    //   .innerJoinAndSelect("checkout.item", "item")
    //   .where("person.university_id = :university_id", {
    //     university_id: person_details!.university_id,
    //   })
    //   .getOne();

    // find device object
    const device_details = await Item.findOneBy({
      brand,
      model,
      code_name,
      status: DeviceStatus.AVAILIABLE,
    });

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

    // insert checkout object
    await Checkout.insert(checkout_details);

    // return checkout object
    res.status(200).json({});
  } catch (err) {
    logger.error(err);
    res.status(404).send("ERROR");
  }
};

export = { view_person, view_checkout, checkout_item };
