module.exports = {
  name: "submit",
  desription: "this is a ping command",
  execute(message, args) {
    // api call
    let len = args.activeChannels.length;
    message.guild.channels
      .create("Results", {
        type: "text",
      })
      .then((channel) => {
        const results = message.client.channels.cache.find(
          (c) => c.id === "" + channel.id
        );
        results.send("Below is the correct code:");
        results.send(message.message.content);
        results.send("This was done in: " /*call to object of time*/);
        results.send("Congrats: " + message.channel.name() + ", nice win");
      });
    for (let i = 0; i < len; i++) {
      let removedChannel = activeChannels.splice(0, 1);
      removedChannel = args.timer.clearInterval(timerObj);
      removedChannel.delete();
    }
  },
};
