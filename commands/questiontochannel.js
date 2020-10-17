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
    
  },
};
