import express from "express";
// import authorize_page = require("../middleware/authorize_page");
// import { UserRole } from "../utils/UserRoles";
const router = express.Router();
import application_logic = require("../logic/application_logic");

// router.get(
//   "/",
//   authorize_page([UserRole.ADMIN]),
//   application_logic.view_all_applications
// );

// router.get(
//   "/:id",
//   authorize_page([UserRole.ADMIN]),
//   application_logic.view_application
// );

// router.post(
//   "/",
//   authorize_page([UserRole.ADMIN, UserRole.FACULTY]),
//   application_logic.add_application
// );

// router.put(
//   "/",
//   authorize_page([UserRole.ADMIN]),
//   application_logic.deicide_on_application
// );
router.get("/appointments", application_logic.view_appointments);

router.put("/decision", application_logic.decide_on_application);

router.get("/appointments/delete", application_logic.delete_applications);

router.get("/appointments/display", application_logic.display_applications);

//router.get("/", application_logic.view_all_applications);

//router.get("/:id", application_logic.view_application);

//router.post("/", application_logic.add_application);

export = router;
