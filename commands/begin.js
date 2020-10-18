module.exports = {
  name: "begin",
  desription: "starting the bot's functionality",
  async execute(message, args) {
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
    console.log(arr, "hello");
    let time = args.time * 1000;

    let timerObj = setInterval(function () {
      time -= 600000;
      for (let i = 0; i < arr.length; i++) {
        let currentChannel = arr[i];
        currentChannel.send(`${time / 60000} minutes remaining!`);
        console.log(time);
      }
    }, 600000);
    setTimeout(() => {
      for (let i = 0; i < arr.length; i++) {
        currentChannel.send(`Finished!`);
      }
      clearInterval(timerObj);
    }, time);
  },
};
