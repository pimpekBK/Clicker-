import { WebSocketServer } from "ws";

export function createWebSocketServer(server) {
    const wss = new WebSocketServer({ server });

    wss.on("connection", (socket) => {
        console.log("Gracz połączony");

        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());

            console.log("Otrzymano:", message);
        });

        socket.on("close", () => {
            console.log("Gracz rozłączony");
        });
    });

    return wss;
}