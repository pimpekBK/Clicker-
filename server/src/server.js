import app from "./app.js";
import { startConsole } from "./console/console.js";
import pool from "./database/db.js";
import { createWebSocketServer } from "./websocket/socket.js";

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("✅ Połączono z PostgreSQL");
        console.log(result.rows[0]);

        const server = app.listen(PORT, () => {
            console.log(`Serwer działa na porcie ${PORT}`);
        });

        createWebSocketServer(server);

        startConsole();
    } catch (err) {
        
        console.error("❌ Błąd połączenia z bazą:");
        console.error(err);
    }
}

start();