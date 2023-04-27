import express from "express";
const router = express.Router();
import program_logic from "../logic/program_logic";

router.get("/", program_logic.view_programs);

//router.get("/add", program_logic.view_add_program);

//router.delete("/", program_logic.delete_program);

//router.put("/", program_logic.end_program);

export = router;
