import { Request, Response } from "express";
import { logger } from "../index";
import create_profile_view from "../view/view_profile";
import create_profile_checkout_view from "../view/view_profile_checkout";

const view_person = async (_req: Request, res: Response) => {
  try {
    // const university_id = "0000-0000-0000-0001";
    // const person_details = await Person.findOneBy({ university_id });

    const profile_page = new create_profile_view();

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

export = { view_person, view_checkout };
