import { NextFunction, Request, Response } from "express";
import { Program } from "../entity/program";
import create_programs_view from "../view/view_programs";

const view_programs = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get all programs in db
    const item_details = await Program.findBy({});

    /*
    let reduced_item_list: Array<{
      id: string;
      code_name: string;
      availiable_to: string;
      deprecated: boolean;
      created_at: Date;
      last_updated: Date;
    }> = [];
    */

    const view = new create_programs_view();

    let counter = 1;

    if (item_details)
      item_details.forEach((ele) => {
        view.addProgram(
          counter,
          ele.id,
          ele.code_name,
          ele.availiable_to,
          ele.created_at,
          ele.last_updated
        );
        counter++;
      });

    res.status(200).json(view.getData());
  } catch (err) {
    next(err);
  }
};

/*
const add_program = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code_name, availiable_to } = req.body;

    const new_device = Program.create({
      code_name,
      availiable_to,
    });

    await Program.insert(new_device);

    res.status(201).json(new_device);
  } catch (err) {
    next(err);
  }
};

const delete_program = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { code_name, availiable_to } = req.body;
    const program_details = await Program.findBy({ code_name, availiable_to });

    await Program.remove(program_details);

    res.status(200).json(program_details);
  } catch (err) {
    next(err);
  }
};

const end_program = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, code_name, deprecated } = req.body;
    const program_details = await Program.findBy({ code_name });

    program_details!.forEach((ele) => {
      ele.deprecated = deprecated;
      Program.update({ id }, ele);
    });

    res.status(200).json(program_details);
  } catch (err) {
    next(err);
  }
};
*/

export = {
  view_programs,
};
