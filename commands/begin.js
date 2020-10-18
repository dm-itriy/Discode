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
            channel1.send(
              "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?"
            );
            // send starter code
            channel1.send(
              "```class Solution { \n\t public int singleNumber(int[] nums) { \n\n } \t} ```"
            );
            arr.push(channel1);
          });
      }
      times = [];
      timeObjs = [];
      for (let i = 0; i < arr.length; i++) {
        times.push(args.time * 1000);
      }

      for (let i = 0; i < arr.length; i++) {
        let timerObj = setInterval(function () {
          times[i] -= 600000;
          let currentChannel = arr[i];
          currentChannel.send(`${times[i] / 60000} minutes remaining!`);
        }, 600000);
        args.timeObjs.push({ timer: timerObj, timerEnd: null });
      }
      for (let i = 0; i < arr.length; i++) {
        let timerStop = setTimeout(() => {
          let currentChannel = arr[i];
          currentChannel.send(`Finished!`);
          clearInterval(args.timeObjs[i].timer);
        }, args.time * 1000);
        args.timeObjs[i].timerEnd = timerStop;
      }
    } catch (e) {
      console.log();
    }
  },
};
