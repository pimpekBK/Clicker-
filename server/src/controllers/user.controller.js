import * as userService from "../services/user.service.js";
import * as authService from "../services/auth.service.js";

export async function me(req, res) {
    try {
        const user = await userService.me(req.userId);

        if (!user.success) {
            return res.status(401).json(user);
        }

        res.json(user);

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}