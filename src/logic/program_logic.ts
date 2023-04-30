import { NextFunction, Request, Response } from "express";
import { Program } from "../entity/program";
import create_programs_view from "../view/program/view_programs";
import create_add_program_view from "../view/program/view_add_program";

const view_programs = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get all programs in db
    const programs = await Program.findBy({});

    // create the initial program view
    const view = new create_programs_view();

    let counter = 1;

    if (programs.length === 0) {
      view.addSubheader();
    } else {
      programs.forEach((ele) => {
        view.addProgram(counter, ele.code_name, ele.availiable_to);
        counter++;
        view.addDivider();
      });
    }

    res.status(200).json(view.getData());
  } catch (err) {
    next(err);
  }
};

const view_add_program = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const view = new create_add_program_view();
    res.status(200).json(view.getData());
  } catch (err) {
    next(err);
  }
};

const add_program = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code_name, availiable_to } = req.body;

    const new_device = Program.create({
      code_name,
      availiable_to,
    });

    await Program.insert(new_device);

    // redirect to view updated programs page
    const programs = await Program.findBy({});

    const view = new create_programs_view();

    let counter = 1;

    if (programs) {
      programs.forEach((ele) => {
        view.addProgram(counter, ele.code_name, ele.availiable_to);
        counter++;
        view.addDivider();
      });
    } else {
      view.addSubheader();
    }

    res.status(200).json(view.getData());
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

    const program = await Program.findBy({ code_name, availiable_to });

    await Program.remove(program);

    // redirect to view updated programs page
    const programs = await Program.findBy({});

    const view = new create_programs_view();

    let counter = 1;

    if (programs) {
      programs.forEach((ele) => {
        view.addProgram(counter, ele.code_name, ele.availiable_to);
        counter++;
        view.addDivider();
      });
    } else {
      view.addSubheader();
    }

    res.status(200).json(view.getData());
  } catch (err) {
    next(err);
  }
};

/*
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
  view_add_program,
  add_program,
  delete_program,
};
