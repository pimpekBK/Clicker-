import { WebSocketServer } from "ws";
// import { findUserById, findUserIdByToken } from "../repositories/auth.respository.js";
import handleConnection from "./connection.js";

export function createWebSocketServer(server) {
    const wss = new WebSocketServer({ server });

    wss.on("connection", handleConnection);

    return wss;
}









// export function createWebSocketServer(server) {
//     const wss = new WebSocketServer({ server });

//     wss.on("connection", (socket) => {

//         socket.authenticated = false;
//         socket.id = null;
//         socket.nickname = null;
//         socket.ip = socket._socket.remoteAddress;

//         console.log(`Próba połączenia od ip:${socket.ip}`);

//         socket.on("message",async (data) => {
//             try {
//                 const message = JSON.parse(data.toString());

//                 if (message.type === "auth") {
//                     const userId = await findUserIdByToken(message.token);

//                     if (userId === null) {
                        
//                         socket.send(JSON.stringify({
//                             type: "auth",
//                             success: false
//                         }));

//                         socket.close();

//                         return;
//                     }

//                     socket.authenticated = true;
//                     socket.id = userId;


//                     const user = await findUserById(userId);
                    
//                     socket.nickname = user.username;


//                     socket.send(JSON.stringify({
//                         type: "auth",
//                         success: true
//                     }));

//                     console.log(`Użytkownik nick:${socket.nickname} id:${socket.id} połączony`);

//                     return;

//                 }
//                 if (!socket.authenticated){
//                     socket.close();

//                     return;
//                 }

//                 if (message.type === "click") {
//                     console.log(
//                         `User ${socket.userId} wykonał click`
//                     );
//                 }


//             } catch (error) {
//                 console.error("Błąd WebSocket", error);
//             }
            

            
//             console.log("Otrzymano:", message);
//         });

//         socket.on("close", () => {
//             console.log(`Disconnected ${socket.nickname}`);
//         });
//     });

//     return wss;
// }