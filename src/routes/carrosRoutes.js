import express from "express";
import { getAllCarros, getCarrosByID } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/", getAllCarros);
router.get("/:id", getCarrosByID);

export default router;