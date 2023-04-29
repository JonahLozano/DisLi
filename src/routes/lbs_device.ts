// express router
import express from "express";
const router = express.Router();

// lbs device logic
import lbs_device_logic from "../logic/lbs_device_logic";

// routes
router.get("/", lbs_device_logic.view_lbs_device_form);

router.post("/submit", lbs_device_logic.handle_lbs_device_form_submit);

export = router;
