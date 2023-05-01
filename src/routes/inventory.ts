import express from "express";
const router = express.Router();
import inventory_logic from "../logic/inventory_logic";
// import authorize_page from "../middleware/authorize_page";
// import { UserRole } from "../utils/UserRoles";
//import person_logic = require("../logic/person_logic");

router.get("/", inventory_logic.view_inventory);

router.get("/:id", inventory_logic.view_item);

router.get("/add", inventory_logic.view_add_item);

router.post("/add", inventory_logic.add_item);

router.put("/", inventory_logic.modify_item);

/*
router.get("/report", inventory_logic.report_item);

router.get("/search", inventory_logic.search_item);

router.get("/checkouts", person_logic.view_all_checkout);

router.get("/approve", person_logic.approve_checkout);
*/

// router.get(
//   "/",
//   authorize_page([UserRole.ADMIN]),
//   inventory_logic.view_inventory
// );

// router.get("/:id", authorize_page([UserRole.ADMIN]), inventory_logic.view_item);

// router.post("/", authorize_page([UserRole.ADMIN]), inventory_logic.add_item);

// router.put("/", authorize_page([UserRole.ADMIN]), inventory_logic.modify_item);

export = router;
