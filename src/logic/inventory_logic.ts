import { NextFunction, Request, Response } from "express";
import { Item } from "../entity/item";
import { replaceAll } from "../utils/replaceAll";
import create_inventory_view from "../view/inventory/view_inventory";
import create_inventory_item_view from "../view/inventory/view_inventory_item";
import create_add_inventory_item_view from "../view/inventory/view_add_inventory_item";

const delete_all = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Item.find({});
    await Item.remove(items);
    res.status(200).json({});
  } catch (err) {
    next(err);
  }
};

const view_inventory = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const item_details = await Item.find({
      where: { deprecated: false },
      order: { created_at: "DESC" },
    });

    let inv = new create_inventory_view();

    inv.addDivider();

    if (item_details) {
      item_details.forEach((ele) => {
        const anID = replaceAll(ele.serial_number, "-", "");

        inv.addItem(
          anID,
          ele.serial_number,
          ele.status,
          ele.brand,
          ele.model,
          ele.code_name
        );

        inv.addDivider();
      });
    } else {
      inv.addSubheader();
    }

    res.status(200).json(inv.getData());
  } catch (err) {
    next(err);
  }
};

const view_add_item = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = new create_add_inventory_item_view();
    res.status(200).json(page.getData());
  } catch (err) {
    next(err);
  }
};

const view_item = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const serial_number = req.params.id;

    const item_details = await Item.findOneByOrFail({ serial_number });

    let item = new create_inventory_item_view();

    item.addItem(
      item_details.serial_number,
      item_details.status,
      item_details.brand,
      item_details.model,
      item_details.code_name
    );

    res.status(200).json(item.getData());
  } catch (err) {
    next(err);
  }
};

// Add a modify item function
const modify_item = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const serial_number = req.body.serial_number;

    const existing_item = await Item.findOneByOrFail({ serial_number });

    const { brand, model, code_name, status, deprecated } = req.body;

    Object.assign(existing_item, {
      brand,
      model,
      code_name,
      status,
      deprecated,
    });

    await Item.update({ serial_number }, existing_item);

    res.status(201).json(existing_item);
  } catch (err) {
    next(err);
  }
};

const add_item = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // insert item
    const { serial_number, brand, model, code_name } = req.body;

    const new_device = Item.create({
      serial_number,
      brand,
      model,
      code_name,
    });

    await Item.insert(new_device);

    // now display the inventory page
    const item_details = await Item.find({
      where: { deprecated: false },
      order: { created_at: "DESC" },
    });

    let inv = new create_inventory_view();

    inv.addDivider();

    item_details.forEach((ele) => {
      const anID = replaceAll(ele.serial_number, "-", "");

      inv.addItem(
        anID,
        ele.serial_number,
        ele.status,
        ele.brand,
        ele.model,
        ele.code_name
      );

      inv.addDivider();
    });

    res.status(201).json(inv.getData());
  } catch (err) {
    next(err);
  }
};

// add report item as stolen/lost
const report_item = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { serial_number, status } = req.body;

    const existing_item = await Item.findOneByOrFail({ serial_number });

    Object.assign(existing_item, {
      status,
    });

    await Item.update({ serial_number }, existing_item);

    res.status(200).json({});
  } catch (err) {
    next(err);
  }
};

// TODO: make search function
const search_item = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { serial_number } = req.body;

    const item_details = await Item.findOneByOrFail({ serial_number });

    res.status(200).json({ item_details });
  } catch (err) {
    next(err);
  }
};

export = {
  delete_all,
  search_item,
  report_item,
  view_inventory,
  view_item,
  add_item,
  modify_item,
  view_add_item,
};
