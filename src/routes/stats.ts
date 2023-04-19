import express from "express";
const router = express.Router();
import stats_logic from "../logic/stats_logic";

router.get("/", stats_logic.view_stats);

export = router;
