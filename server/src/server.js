import app from "./app.js";
import pool from "./database/db.js";

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("✅ Połączono z PostgreSQL");
        console.log(result.rows[0]);

        app.listen(PORT, () => {
            console.log(`Serwer działa na porcie ${PORT}`);
        });
    } catch (err) {
        console.error("❌ Błąd połączenia z bazą:");
        console.error(err);
    }
}

start();