import { post } from "../api";
import { removeToken, saveToken } from "../token";

const AUTH_URL = "/auth";

export async function login(email, password) {
    const data = await post(
        `${AUTH_URL}/login`,
        {
            email,
            password
        }
    );
    if ( data.success ) {
        saveToken(data.token);
        return true;
    }

    console.log(data.message);
    return false;
}

export async function register(email, nick, password) {
    const data = await post(
        `${AUTH_URL}/regisetr`,
        {
            email,
            nick,
            password
        }
    );

    if (data.success){
        saveToken(data.token);
        return true;
    }

    console.log(data.message);
    return false;
}

export async function logout() {
    const data = await post(
        `${AUTH_URL}/logout`
    );

    if (data.success){
        removeToken();
        return true;
    }

    console.log(data.message);
    return false;
}