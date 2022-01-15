import express from "express";
const router = express.Router();

import { getAllCommits } from "../controllers/commits.js";

router.get("/all", getAllCommits);

export default router;
