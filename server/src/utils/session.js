import crypto from "crypto";

export function generateSessionToken(){
    return crypto.randomBytes(32).toString("hex");
}

export function getSessionExpiration( days ){
    return new Date(
        Date.now() + 1000 * 60 * 60 * 24 * days
    );
}