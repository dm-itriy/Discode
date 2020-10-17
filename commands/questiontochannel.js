module.exports = {
  name: "questiontochannel",
  desription: "This sends a message to a specific channel",
  execute(message, args) {
    const chanel1 = message.client.channels.cache.find(
      (channel) => channel.id === message.channelId
    );
    // This is the question name:
    chanel1.send("Single Number:");
    // This is the question description
    chanel1.send(
      "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?"
    );
  },
};
