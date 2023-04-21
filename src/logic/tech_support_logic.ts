import { NextFunction, Request, Response } from "express";
import create_tech_support_view from "../view/view_tech_support";

const view_tech_support = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tech_support = new create_tech_support_view();
    res.status(200).json(tech_support.getData());
  } catch (err) {
    next(err);
  }
};

export = {
  view_tech_support,
};
