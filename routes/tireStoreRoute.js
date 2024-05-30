import express from "express";

import createTire from "../ctrl/tireStore/create.js";
import getAllTires from "../ctrl/tireStore/getAll.js";
import findByTire from "../ctrl/tireStore/find.js";
import updateTire from "../ctrl/tireStore/update.js";
import removeTires from "../ctrl/tireStore/delete.js";

const router = express.Router();

router.get('/', getAllTires);
router.post('/', createTire);
router.get('/:id', findByTire);
router.put('/:id', updateTire);
router.delete('/:id', removeTires);
// router.delete('/:id', removeTires);

export default router;