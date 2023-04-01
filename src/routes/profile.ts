import express from "express";
const router = express.Router();
import person_logic from "../logic/person_logic";

router.get("/", person_logic.view_person);

router.get("/checkout", person_logic.view_checkout);

export = router;
