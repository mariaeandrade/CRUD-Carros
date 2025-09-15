import express from "express";
import { getAllCarros, getCarrosByID, creatCarro, deleteCarro, updateCarro } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/", getAllCarros);
router.get("/:id", getCarrosByID);
router.post("/", creatCarro);
router.delete("/:id", deleteCarro);
router.put("/:id",updateCarro)

export default router;