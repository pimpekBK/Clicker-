import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/click", authenticate, async (req, res) => {

    console.log("Kliknął użytkownik:", req.userId);

    res.json({
        success: true
    });
});

export default router;