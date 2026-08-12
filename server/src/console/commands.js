export const commands = {
    help: async () => {
        console.log(`
            Available commands:

            help        - show commands
            rooms       - show rooms
            users       - show users
            save        - save game state
            stop        - stop server
        `);
    },

    rooms: async () => {
        console.log("Rooms:");
        // tutaj później np.:
        // console.log(rooms);
    },

    users: async () => {
        console.log("Users:");
        // tutaj pobierasz użytkowników
    },

    save: async () => {
        console.log("Saving game...");
        // await saveGame();
    },

    stop: async () => {
        console.log("Stopping server...");

        // tutaj później:
        // await saveGame();
        // server.close();
        // process.exit(0);
    }
};