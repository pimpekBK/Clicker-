let socket = null;

export function connectToServer() {
    if (socket && socket.readyState === WebSocket.OPEN) {
        console.log("WebSocket jest już połączony");
        return;
    }

    socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
        console.log("🟢 Połączono z WS");
    };

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);

        console.log("Server:", message);
    };

    socket.onerror = (error) => {
        console.error("WebSocket:", error);
    };

    socket.onclose = () => {
        console.log("🔴 WS rozłączony");
        socket = null;
    };
}

export function disconnectFromServer() {
    if (!socket) {
        console.log("WebSocket nie jest połączony");
        return;
    }

    socket.close();
    socket = null;
}

export function sendMessage(message) {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
        console.error("WebSocket nie jest połączony");
        return;
    }

    socket.send(JSON.stringify(message));
}
