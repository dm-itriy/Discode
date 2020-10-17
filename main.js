const DISCORD = require("discord.js");

// this is our discord bot!
const client = new DISCORD.Client();

const prefix = "~";

// importing the 'fs' package
const fs = require("fs");

client.commands = new DISCORD.Collection();

const commandfiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandfiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Discode is online");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  if (command === "sc") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "startcoding") {
    client.commands.get("start").execute(message, args);
  }
});

client.login("NzY3MTE1NzU0NTc5MDM0MTEy.X4tOOA.0eQrQ9mmEZx7EKBVzGQkyqw3dTk");