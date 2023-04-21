// express router
import express from "express";
const router = express.Router();

// tech support logic
import tech_support_logic from "../logic/tech_support_logic";

//routes
router.get("/", tech_support_logic.view_tech_support);

export = router;
