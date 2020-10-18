module.exports = {
  name: "submit",
  desription: "this is the submit command",
  async execute(message, args) {
    // api call
    const fetch = require("node-fetch");
    try {
      let questionId = args.currentQuestionID;
      console.log("message", message.content);
      let id = await fetch(`http://34.68.1.129:7000/submit/${questionId}`, {
        method: "POST",
        difficulty: 1,
        body: JSON.stringify({
          src: message.content,
          lang: "python3",
          timeout: "5",
        }),
      });

      console.log("This is the id", id);
      let queued = "Queued";
      while (queued === "Queued") {
        console.log("in da loop");
        let response = await fetch(`http://34.68.1.129:7000/results/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let result = await response.json();
        queued = result.status;
      }

      console.log(queued);

      /*
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
          results.send("This was done in: ");
          results.send("Congrats: " + message.channel.name() + ", nice win");
        });
      for (let i = 0; i < len; i++) {
        let removedChannel = activeChannels.splice(0, 1);
        removedChannel = args.timer.clearInterval(timerObj);
        removedChannel.delete();
      }
      */
    } catch (e) {
      console.log("error", e);
    }
  },
};
