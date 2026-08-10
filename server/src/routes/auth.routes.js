import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post( "/register", authController.register );

router.post( "/login", authController.login );

router.post( "/logout", authController.logout );

// router.post( "/me", authController.me );
// 

router.get("/me", authenticate, async (req, res) => {

    console.log(req.token);

    res.json({
        success: true
    });
});

export default router;
