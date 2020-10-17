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

let time = 3600;
let ifStarted = false;

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  if (command === "begin") {
    ifStarted = true;
    client.commands.get("begin").execute(message, time);
  } else if (command === "challenge") {
    client.commands.get("challenge").execute({ message: message, client: client }, args);
  } else if (command === "message") {
    client.commands
      .get("questiontochannel")
      .execute({ channelId: "766837344329269249", client: client }, args);
  }
  if (ifStarted) {
    if (command === "sc") {
      client.commands.get("ping").execute(message, args);
    }
  } else if (command === "message") {
    client.commands
      .get("questiontochannel")
      .execute({ channelId: "766837344329269249", client: client }, args);
  }
});

client.login("NzY3MTE1NzU0NTc5MDM0MTEy.X4tOOA.BQWoRbp4hnKqSMwtcRz6elrDgUM");