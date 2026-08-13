import handleMessage from "./handlers/message.handler.js";

export default function handleConnection(socket) {

    socket.authenticated = false;
    socket.id = null;
    socket.nickname = null;

    socket.ip = socket._socket.remoteAddress;

    console.log(
        `Próba połączenia od IP: ${socket.ip}`
    );

    socket.on("message", (data) => {
        handleMessage(socket, data);
    });

    socket.on("close", () => {
        console.log(
            `Połączenie zamknięte: ${socket.ip}`
        );
    });
}