import handleAuth from "./auth.handler.js";
import handleGame from "./game.handler.js";

export default async function handleMessage(socket, data) {

    try {
        const message = JSON.parse(data.toString());

        if (message.type === "auth") {
            await handleAuth(socket, message);
            return;
        }

        if (!socket.authenticated) {
            socket.close();
            return;
        }

        if (message.type === "game") {
            await handleGame(socket, message);
            return;
        }

    } catch (error) {
        console.error("Błąd WebSocket:", error);
    }
}