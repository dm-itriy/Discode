module.exports = {
  name: "begin",
  desription: "starting the bot's functionality",
  execute(message, args) {
    message.message.guild.channels
      .create("User 1 Channel", {
        type: "text",
      })
      .then((channel) => {
        const channel1 = message.client.channels.cache.find(
          (c) => c.id === "" + channel.id
        );
        // This is the question name:
        channel1.send(
          "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?"
        );

        let time = args * 1000;
        console.log(time);
        let timerObj = setInterval(function () {
          time -= 600000;
          channel1.send(`${time / 60000} minutes remaining!`);
        }, 600000);

        setTimeout(() => {
          clearInterval(timerObj);
          channel1.send(`Finished!`);
        }, time);
      });
  },
};
