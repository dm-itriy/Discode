module.exports = {
  name: "begin",
  desription: "starting the bot's functionality",
  async execute(message, args) {
    // get the coding question
    try {
      const fetch = require("node-fetch");
      let question = "";
      let questionID = "";

      const response = await fetch(`http://34.68.1.129:7000/getProblem/${1}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      question = result.prompt;
      questionID = result.id;
      console.log("init id", questionID);

      let arr = [];
      for (let i = 0; i < args.args.length; i++) {
        let member = args.args[i];
        // new channel creation code
        await message.message.guild.channels
          .create(member, {
            type: "text",
          })
          .then((channel) => {
            args.activeChannels.push(channel.id);

            const channel1 = message.client.channels.cache.find(
              (c) => c.id === "" + channel.id
            );
            // This is the question name:
            channel1.send(question);
            // send starter code
            channel1.send("```... write your code here```");
            arr.push(channel1);
          });
      }
      let time = args.time * 1000;

      let timerObj = setInterval(function () {
        time -= 600000;
        for (let i = 0; i < arr.length; i++) {
          let currentChannel = arr[i];
          currentChannel.send(`${time / 60000} minutes remaining!`);
        }
      }, 600000);
      setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
          currentChannel.send(`Finished!`);
        }
        clearInterval(timerObj);
      }, time);

      return questionID;
    } catch (e) {
      console.log("error", e);
    }
  },
};
