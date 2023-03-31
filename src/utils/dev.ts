import express from "express";
import { clearDB } from "./clearDB";
const router = express.Router();

router.get("/wipe-database", async (_, res) => {
  clearDB();
  res.send("deleted");
});

export = router;
