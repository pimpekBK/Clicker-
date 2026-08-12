import readline from "readline";
import { commands } from "./commands.js";

export function startConsole() {
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "> "
    });

    console.log("Console started");
    r1.prompt();

    r1.on("line", async (line) => {
        const input = line.trim();

        if (!input) {
            r1.prompt();
            return;
        }

        const [command, ...args] = input.split(" ");

        const handler = commands[command];

        if (!handler) {
            console.log(`Unknown command: ${command}`);
            r1.prompt();
            return;
        }

        try {
            await handler(args);
        } catch (err) {
            console.error("Command error", err);
        }

        r1.prompt();
    });
}