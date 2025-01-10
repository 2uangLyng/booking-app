import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidencies,
} from "../controllers/residencyController.js";

const router = express.Router();

router.post("/create", createResidency);
router.get("/all", getAllResidencies);
router.get("/:id", getResidencies);

export { router as residencyRoute };
