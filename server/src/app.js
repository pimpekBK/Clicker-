import express from "express";
import cors from "cors";
import pool from "./database/db.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Serwer działa!");
});

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json( { error: "Błąd servera " });
    }
});

app.use("/auth", authRoutes);

export default app;