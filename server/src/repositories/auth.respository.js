// tu data base
import db from "../database/db.js";

export async function findUserByEmail(email){
    const result = await db.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );
    return result.rows[0];
}

export async function findUserByNick(nick){
    const result = await db.query(
        `SELECT * FROM users WHERE nick = $1`,
        [nick]
    );
    return result.rows[0];
}

export async function findUserById(id){
    const result = await db.query (
        `SELECT * FROM users WHERE id = $1`,
        [id]
    );
    return result.rows[0];
}

export async function createUser({ email, nick, passworHash }){
    const result = await db.query (
        `
        INSERT INTO users(email, nick, password_hash)
        VALUES($1, $2, $3)
        RETURNING id, email, nick
        `,
        [email ,nick , passworHash]
    );

    return result.rows[0];
}

export async function createSession(session){}

export async function findSession(token){}

export async function deleteSession(token){}

export async function deleteAllSessions(userId){}