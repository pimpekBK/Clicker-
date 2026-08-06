import bcrypt from "bcrypt";
import * as authRepository from "../repositories/auth.respository.js";

export async function register({ email, nick, password }) {

    if (!email || !nick || !password) {
        return {
            success: false,
            message: "Uzupełnij wszystkie pola."
        };
    }

    const emailExists = await authRepository.findUserByEmail(email);

    if (emailExists) {
        return {
            success: false,
            message: "Email jest już zajęty."
        };
    }

    const nickExists = await authRepository.findUserByNick(nick);

    if (nickExists) {
        return {
            success: false,
            message: "Nick jest już zajęty."
        };
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await authRepository.createUser({
        email,
        nick,
        passwordHash
    });

    return {
        success: true,
        message: "Konto zostało utworzone.",
        user: {
            id: user.id,
            nick: user.nick,
            email: user.email
        }
    };
}