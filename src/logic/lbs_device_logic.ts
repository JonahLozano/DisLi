import { NextFunction, Request, Response } from "express";
import create_lbs_device_view from "../view/view_lbs_device";

const view_lbs_device_form = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lbs_device_form = new create_lbs_device_view();
    res.status(200).json(lbs_device_form.getData());
  } catch (err) {
    next(err);
  }
};

export = {
  view_lbs_device_form,
};
