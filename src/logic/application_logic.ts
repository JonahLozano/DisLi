import { NextFunction, Request, Response } from "express";
import { Application } from "../entity/application";
import { Person } from "../entity/person";
import { Item } from "../entity/item";

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

const deicide_on_application = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { decision, brand, model, university_id } = req.body;

    const program_details = await Application.update(
      { brand, model, university_id },
      { status: decision }
    );

    res.status(200).json(program_details);
  } catch (err) {
    next(err);
  }
};

export = {
  view_all_applications,
  view_application,
  add_application,
  deicide_on_application,
};
