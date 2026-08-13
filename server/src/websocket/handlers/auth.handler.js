import { findUserById, findUserIdByToken } from "../../repositories/auth.respository.js";

export default async function handleAuth(socket, message) {

    const userId = await findUserIdByToken(message.token);

    if (userId === null) {

        socket.send(JSON.stringify({
            type: "auth",
            success: false
        }));

        socket.close();

        return;
    }

    const user = await findUserById(userId);

    socket.authenticated = true;
    socket.id = userId;
    socket.nickname = user.username;

    socket.send(JSON.stringify({
        type: "auth",
        success: true
    }));

    console.log(
        `Użytkownik nick:${socket.nickname} id:${socket.id} połączony`
    );
}