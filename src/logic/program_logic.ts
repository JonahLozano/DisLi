import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { Program } from "../entity/program";
import create_program_view from "../view/view_program";

const view_programs = async (_req: Request, res: Response) => {
  try {
    const item_details = await Program.findBy({});

    let reduced_item_list: Array<{
      id: string;
      code_name: string;
      availiable_to: [string];
      deprecated: boolean;
    }> = [];

    item_details.forEach((ele) => {
      // find if the code_name is already in the list
      const foundObject = reduced_item_list.find(
        (obj) => obj.code_name === ele.code_name
      );

      // if it is, add the availiable_to to the list
      // if it isn't, add the code_name and availiable_to to the list
      foundObject
        ? foundObject.availiable_to.push(ele.availiable_to)
        : reduced_item_list.push({
            id: ele.id,
            code_name: ele.code_name,
            availiable_to: [ele.availiable_to],
            deprecated: ele.deprecated,
          });
    });

    const view = new create_program_view();

    if (reduced_item_list)
      reduced_item_list.forEach((ele) => {
        view.addData(ele.id, ele.code_name, ele.availiable_to, ele.deprecated);
      });

    res.status(200).json(view.getData());
  } catch (err) {
    console.log(err.stack);
    res.status(404).send("ERROR");
  }
};

const add_program = async (req: Request, res: Response) => {
  try {
    const { code_name, availiable_to } = req.body;

    const new_device = Program.create({
      code_name,
      availiable_to,
    });

    await Program.insert(new_device);

    res.status(201).json(new_device);
  } catch (err) {
    console.log(err.stack);
    if (err instanceof QueryFailedError) {
      res.status(404).send(err.message);
    } else {
      res.status(400).send("ERROR");
    }
  }
};

const delete_program = async (req: Request, res: Response) => {
  try {
    const { code_name, availiable_to } = req.body;
    const program_details = await Program.findBy({ code_name, availiable_to });

    await Program.remove(program_details);

    res.status(200).json(program_details);
  } catch (err) {
    console.log(err.stack);
    res.status(404).send("ERROR");
  }
};

const end_program = async (req: Request, res: Response) => {
  try {
    const { id, code_name, deprecated } = req.body;
    const program_details = await Program.findBy({ code_name });

    program_details!.forEach((ele) => {
      ele.deprecated = deprecated;
      Program.update({ id }, ele);
    });

    console.log(program_details);
    console.log(deprecated);

    res.status(200).json(program_details);
  } catch (err) {
    console.log(err.stack);
    res.status(404).send("ERROR");
  }
};

export = {
  view_programs,
  add_program,
  delete_program,
  end_program,
};
