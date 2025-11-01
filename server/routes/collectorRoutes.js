import express from "express";
import { listCollectors } from "../controllers/collectorController.js";

const router = express.Router();

// GET /api/collectors
router.get("/", listCollectors);

export default router;
