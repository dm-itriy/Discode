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

let swit = true;

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  if (command === "sc") {
    if (swit) {
      client.commands.get("ping").execute(message, args);
    } else {
      client.commands.get("ping2").execute(message, args);
    }
  } else if (command === "startcoding") {
    client.commands.get("start").execute(message, args);
  } else if (command === "switch") {
    swit = !swit;
    client.commands.get("swit").execute(message, args);
  } else if (command === "message") {
    client.commands
      .get("questiontochannel")
      .execute({ channelId: "766837344329269249", client: client }, args);
  }
});
