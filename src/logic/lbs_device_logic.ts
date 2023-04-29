import { NextFunction, Request, Response } from "express";
import create_lbs_device_view from "../view/lbs_device/view_lbs_device";

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

const handle_lbs_device_form_submit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    //const { first_name, last_name, email, phone, code_name, device_status, incident_location, is_usable, damage_description, incident_date, device_photo } = req.body;
    res.status(200).json({});
  } catch (err) {
    next(err);
  }
};

export = {
  view_lbs_device_form,
  handle_lbs_device_form_submit,
};
