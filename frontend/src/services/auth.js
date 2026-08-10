import { post } from "./api";

const AUTH_URL = "/auth";

export async function login(email, password) {
    return post(
        `${AUTH_URL}/login`,
        {
            email,
            password
        }
    );
}

export async function register(email, nick, password) {
    return post(
        `${AUTH_URL}/regisetr`,
        {
            email,
            nick,
            password
        }
    );
}

export async function logout() {
    return post(
        `${AUTH_URL}/logout`
    );
}