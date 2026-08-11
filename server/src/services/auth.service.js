import * as authRepository from "../repositories/auth.respository.js";
import crypto from "crypto";
import { comaprePassword, hashPassword } from "../utils/hash.js";
import { generateSessionToken, getSessionExpiration } from "../utils/session.js";

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

    const passwordHash = await hashPassword(password);

    const token = generateSessionToken();
    const expiresAt = getSessionExpiration(30);

    
    const user = await authRepository.createUser({
        email,
        nick,
        passwordHash
    });


    const session = await authRepository.createSession ({
        token,
        userId: user.id,
        expiresAt
    });

    return {
        success: true,
        message: "Konto zostało utworzone.",
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            token: session.token
        }
    };
}

export async function login({ email, password }) {

    console.log("LOGIN DATA:", email, password);

    const user = await authRepository.findUserByEmail(email);

    console.log("FOUND USER:", user);

    if (!user) {
        return {
            success: false,
            message: "Nieprawidłowy email lub hasło"
        };
    }

    const valid = await comaprePassword(password, user.password_hash);

    console.log("PASSWORD VALID:", valid);

    if (!valid) {
        return {
            success: false,
            message: "Nieprawidłowy email lub hasło"
        };
    }


    const token = generateSessionToken();
    const expiresAt = getSessionExpiration(30);

    const session = await authRepository.createSession({
        token,
        userId: user.id,
        expiresAt
    });
    console.log(session.token + " " + session.expires_at);

    return {
        success: true,
        user: {
            id: user.id,
            email: user.email,
            username: user.username,
            token: token
        }
    }
    
}

export async function logout(token) {
    const session = await authRepository.findUserByToken(token);
    if(!session) {
        return {
            success: false,
            message: "Nie znaleziono sesji"
        }
    }

    const deleted = await authRepository.deleteSession(token);

    if(deleted){
        return {
            success: false,
            message: "Nie udało się usunąć sesji"
        }
    }

    return {
        success: true,
        message: "Wylogowano poyślnie"
    };
}

export async function authenticate(token) {
    const session = await authRepository.findSession(token);

    if (!session) {
        return {
            success: false,
            message: "Nieprawidłowa sesja"
        }
    }
    if (new Date(session.expires_at) < new Date()) {
        await authRepository.deleteSession(token);
        return {
            success: false,
            message: "Sesja wygasła"
        }
    }

    const user = await authRepository.findUserById(session.user_id);
    return {
        success: true,
        user
    };
}

