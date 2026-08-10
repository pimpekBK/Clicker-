import db from "../db.js";

export async function authenticate(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Brak tokenu"
            });
        }

        const [type, token] = authHeader.split(" ");

        if (type !== "Bearer" || !token) {
            return res.status(401).json({
                success: false,
                message: "Nieprawidłowy token"
            });
        }

        const result = await db.query(
            `
            SELECT user_id
            FROM sessions
            WHERE token = $1
            AND expires_at > NOW()
            `,
            [token]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Sesja wygasła lub token jest nieprawidłowy"
            });
        }

        req.userId = result.rows[0].user_id;

        next();

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Błąd serwera"
        });
    }
}