import express from "express";

import addSoldTire from "../ctrl/soldTire/add.js";
import getAllSoldTires from "../ctrl/soldTire/getAll.js";
import removeSoldTire from "../ctrl/soldTire/delete.js";


const router = express.Router();

router.get('/', getAllSoldTires);
router.post('/', addSoldTire);
router.delete('/:id', removeSoldTire);

export default router;