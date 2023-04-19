import { NextFunction, Request, Response } from "express";
import { Item } from "../entity/item";
import { replaceAll } from "../utils/replaceAll";
import create_inventory_view from "../view/view_inventory";
import create_inventory_item_view from "../view/view_inventory_item";

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

    res.status(200).json(inv.getData());
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

const add_item = async (req: Request, res: Response, next: NextFunction) => {
  const data: any = {
    metadata: {
      version: "2.0",
    },
    contentContainerWidth: "narrow",
    content: [
      {
        elementType: "divider",
        borderColor: "transparent",
      },
      {
        elementType: "form",
        id: "add_item_form",
        heading: {
          heading: "Add Inventory Item",
          headingLevel: 2,
          description: "Items marked with an asterisk (*) are required.",
        },
        items: [
          {
            elementType: "formInputBarcode",
            name: "serial_number",
            label: "Serial Number",
            required: true,
          },
          {
            elementType: "formInputText",
            name: "brand",
            label: "Brand",
          },
          {
            elementType: "formInputText",
            name: "model",
            label: "Model",
          },
          {
            elementType: "formInputText",
            name: "code_name",
            label: "Code Name",
          },
        ],
        buttons: [
          {
            elementType: "formButton",
            name: "s1_reset",
            title: "Reset",
            buttonType: "reset",
            actionStyle: "destructiveQuiet",
            minWidth: "8rem",
          },
          {
            elementType: "formButton",
            name: "s1_submit",
            title: "Submit",
            buttonType: "submit",
            actionStyle: "constructive",
            minWidth: "8rem",
          },
        ],
        trackDirtyStateButtonNames: ["serial_number"],
        buttonsHorizontalAlignment: "center",
      },
    ],
  };

  try {
    const { serial_number, brand, model, code_name } = req.body;

    const new_device = Item.create({
      serial_number,
      brand,
      model,
      code_name,
    });

    await Item.insert(new_device);

    res.status(201).json(data);
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

const add_item_page = async (_req: Request, res: Response) => {
  // const raw_LOB = await Item.createQueryBuilder("Item")
  //   .select("Item.brand")
  //   .distinct(true)
  //   .getRawMany();

  // const list_of_brands = raw_LOB
  //   .map((ele) => ele.Item_brand)
  //   .filter((ele) => ele !== "");

  const data = {
    metadata: {
      version: "2.0",
    },
    contentContainerWidth: "narrow",
    content: [
      {
        elementType: "divider",
        borderColor: "transparent",
      },
      {
        elementType: "form",
        id: "add_item_form",
        heading: {
          heading: "Add Inventory Item",
          headingLevel: 2,
          description: "Items marked with an asterisk (*) are required.",
        },
        items: [
          {
            elementType: "formInputBarcode",
            name: "serial_number",
            label: "Serial Number",
            required: true,
          },
          {
            elementType: "formInputText",
            name: "brand",
            label: "Brand",
          },
          {
            elementType: "formInputText",
            name: "model",
            label: "Model",
          },
          {
            elementType: "formInputText",
            name: "code_name",
            label: "Code Name",
          },
        ],
        buttons: [
          {
            elementType: "formButton",
            name: "s1_reset",
            title: "Reset",
            buttonType: "reset",
            actionStyle: "destructiveQuiet",
            minWidth: "8rem",
          },
          {
            elementType: "formButton",
            name: "s1_submit",
            title: "Submit",
            buttonType: "submit",
            actionStyle: "constructive",
            minWidth: "8rem",
          },
        ],
        trackDirtyStateButtonNames: ["serial_number"],
        buttonsHorizontalAlignment: "center",
      },
    ],
  };

  res.status(200).json(data);
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
  search_item,
  report_item,
  view_inventory,
  view_item,
  add_item,
  modify_item,
  add_item_page,
};
