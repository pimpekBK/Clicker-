import * as authService from "../services/auth.service.js";

export async function register(req, res) {
    try {
        const result = await authService.register(req.body);

        if (!result.success) {
            return res.status(400).json(result);
        }

        res.status(201).json(result);

    } catch (err) {
        console.error(err);
        
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export async function login(req, res) {
    try {
        const result = await authService.login(req.body);

        if (!result.success) {
            return res.status(401).json(result);
        }

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export async function logout(req, res) {
    try {
        await authService.logout(req.user.token);

        res.json({
            success: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false
        });
    }
}

export async function me(req, res) {
    try {
        const user = await authService.getUser(req.user.id);

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false
        });
    }
}