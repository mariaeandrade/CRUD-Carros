import express from "express";
import { getAllCarros, getCarrosByID, creatCarro } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/", getAllCarros);
router.get("/:id", getCarrosByID);
router.post("/", creatCarro);

export default router;