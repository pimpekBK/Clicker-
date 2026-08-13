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
        `SELECT * FROM users WHERE username = $1`,
        [nick]
    );
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
}

export async function findUserById(id){
    const result = await db.query (
        `SELECT * FROM users WHERE id = $1`,
        [id]
    );
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
}


export async function findSessionByToken(token) {
    const result = await db.query(
        `
            SELECT * FROM sessions WHERE token = $1 AND expires_at > NOW()
        `,[token]
    );
    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];
}

export async function findUserIdByToken(token) {
    const result = await db.query(
        ` SELECT user_id FROM sessions WHERE token = $1 AND expires_at > NOW()
        `,[token]
    );

    return result.rows[0].user_id;
};

export async function findUserByToken(token) {
    const session = await findSessionByToken(token);

    if (!session){
        return null;
    }
    
    const result = await db.query(
        `
            SELECT * FROM users WHERE id = $1
        `, [session.user_id]
    );

    return result.rows[0] || null;
}

export async function createUser({ email, nick, passwordHash }){
    const result = await db.query (
        `
        INSERT INTO users(email, username, password_hash)
        VALUES($1, $2, $3)
        RETURNING id, email, username
        `,
        [email ,nick , passwordHash]
    );

    return result.rows[0];
}

export async function createSession(session) {
    const result = await db.query(
        `
        INSERT INTO sessions (user_id, token, expires_at)
        VALUES ($1, $2, $3)

        ON CONFLICT (user_id)
        DO UPDATE SET
            token = EXCLUDED.token,
            expires_at = EXCLUDED.expires_at

        RETURNING user_id, token, expires_at
        `,
        [
            session.userId,
            session.token,
            session.expiresAt
        ]
    );

    return result.rows[0];
}

export async function findSession(token) {
    const result = await db.query(
        `
        SELECT user_id, token, expires_at
        FROM sessions
        WHERE token = $1
        `,
        [token]
    );

    return result.rows[0];
}

export async function deleteSession(token) {
    await db.query(
        `
        DELETE FROM sessions
        WHERE token = $1
        `,
        [token]
    );
}





export async function deleteAllSessions(userId){}