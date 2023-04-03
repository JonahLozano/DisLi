import express from "express";
const router = express.Router();
import person_logic from "../logic/person_logic";

router.get("/", person_logic.view_person);

router.get("/checkouts", person_logic.view_checkout);

router.post("/checkouts", person_logic.checkout_item);

export = router;
