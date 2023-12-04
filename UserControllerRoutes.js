import express from "express";

const router =  express.Router()
import { creates, deletes, finds, update } from "./UserController.js";


router.post("/create/",creates);
router.get("/find/",finds);
router.put("/update/",update);
router.delete("/delete/",deletes);

export default router;