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
    },

    say: async () => {
        console.log("Say: ");
    }

};