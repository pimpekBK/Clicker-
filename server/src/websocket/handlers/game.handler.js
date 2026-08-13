export default async function handleGame(socket, message) {

    if (message.action === "click") {

        console.log(
            `User ${socket.id} wykonał click`
        );

    }

}