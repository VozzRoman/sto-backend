import express from "express";
import getAllClients from '../ctrl/clients/getAll.js';
import createClients from '../ctrl/clients/create.js';
import removeClient from '../ctrl/clients/delete.js';
import findClient from '../ctrl/clients/find.js';
import updateClients from "../ctrl/clients/update.js";
const router = express.Router();


router.get('/', getAllClients);
router.post('/', createClients);
router.get('/:id', findClient);
router.put('/:id', updateClients);
router.delete('/:id', removeClient);

export default router;