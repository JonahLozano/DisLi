import { NextFunction, Request, Response } from "express";
import create_launcher_admin_view from "../view/launcher/view_launcher_admin";
import create_launcher_student_view from "../view/launcher/view_launcher_student";

const view_launcher_admin = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const launcher_admin = new create_launcher_admin_view();
    res.status(200).json(launcher_admin.getData());
  } catch (err) {
    next(err);
  }
};

const view_launcher_student = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const launcher_student = new create_launcher_student_view();
    res.status(200).json(launcher_student.getData());
  } catch (err) {
    next(err);
  }
};

export = {
  view_launcher_admin,
  view_launcher_student,
};
