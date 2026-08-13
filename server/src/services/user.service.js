import * as authRepository from "../repositories/auth.respository.js";
import { findUserById } from "../repositories/auth.respository.js";

export async function me(userId) {
    const user = await findUserById(userId);

    if (!user) {
        return {
            success: false,
            message: "User not found"
        };
    }

    return {
        success: true,
        user: {
            id: user.id,
            username: user.username
        }

    };
}