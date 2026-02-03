import { Router } from "express";
import homeRoutes from "./home.route.js";

const router = Router();

router.use("/", homeRoutes);

export default router;
