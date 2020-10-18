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

let ifStarted = false;
let currentQuestionID = -1;
let diff = 1;
let activeChannels = [];

client.on("message", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("```")) {
    message.content = message.content.replace("```", "");
    message.content = message.content.replace("```", "");
    message.content.trim();
    // submit code
    client.commands.get("submit").execute(message, {
      activeChannels: activeChannels,
      currentQuestionID: currentQuestionID,
    });
  }

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  if (command === "help") {
    client.commands.get("help").execute(message, args);
  } else if (
    command === "exit" &&
    (activeChannels.includes(message.channel) ||
      message.channel.name === "results")
  ) {
    client.commands.get("exit").execute(message, args);
  } else if (command === "diff") {
    if (Number(args[0]) % 1 === 0 && args[0] >= 1 && args[0] <= 3) {
      diff = args[0];
      message.channel.send(`Difficulty has been set to ${diff}`);
    } else {
      message.channel.send(
        "Not a valid difficulty. Valid difficulties lie between 1 and 3."
      );
    }
  } else if (command === "begin") {
    getQuestion(message, args);
  } else if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  }
});

async function getQuestion(message, args) {
  currentQuestionID = await client.commands.get("begin").execute(
    { message: message, client: client },
    {
      args: args,
      activeChannels: activeChannels,
      diff: diff,
    }
  );
}

// let key = fs.readFileSync("key.txt", "utf8");
client.login('NzY3MTE1NzU0NTc5MDM0MTEy.X4tOOA.aSn6cDifSzJAHfRosdCWPbUQn3U');
