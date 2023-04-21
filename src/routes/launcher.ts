// express router
import express from "express";
const router = express.Router();

// launcher logic
import launcher_logic from "../logic/launcher_logic";

//routes
router.get("/admin", launcher_logic.view_launcher_admin);
router.get("/student", launcher_logic.view_launcher_student);

export = router;
