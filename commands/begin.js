module.exports = {
  name: "begin",
  desription: "starting the bot's functionality",
  async execute(message, args) {
    // get the coding question
    try {
      const fetch = require("node-fetch");
      let question = "";
      let questionID = "";

      const response = await fetch(
        `http://34.68.1.129:7000/getProblem/${args.diff}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      question = result.prompt;
      questionID = result.id;

      let arr = [];
      for (let i = 0; i < args.args.length; i++) {
        let member = args.args[i];
        // new channel creation code
        await message.message.guild.channels
          .create(member, {
            type: "text",
          })
          .then((channel) => {
            args.activeChannels.push(channel);
            const channel1 = message.client.channels.cache.find(
              (c) => c.id === "" + channel.id
            );
            // This is the question name:
            channel1.send(question);
            // send starter code
            channel1.send("```... type your code here ```");
            arr.push(channel1);
          });
      }

      return questionID;
    } catch (e) {
      console.log(e);
    }
  },
};
