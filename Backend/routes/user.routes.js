import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/getUsers", protectRoute, getUsersForSidebar);

export default router;
