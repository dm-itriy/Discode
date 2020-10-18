module.exports = {
  name: "submit",
  desription: "this is the submit command",
  async execute(message, args) {
    // api call
    const fetch = require("node-fetch");
    try {
      let questionId = args.currentQuestionID;
      let response1 = await fetch(
        `http://34.68.1.129:7000/submit/${questionId}`,
        {
          method: "POST",
          body: JSON.stringify({
            src: message.content,
            lang: "python3",
            timeout: "5",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let firstResult = await response1.json();

      let response = await fetch(
        `http://34.68.1.129:7000/results/${firstResult.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let result = await response.json();
      let codeSubmissionResult = result.status.trim();
      if (result.stderr != "") {
        console.log("error has occured ", result.stderr);
      } else if (codeSubmissionResult === "success") {
        let len = args.activeChannels.length;
        message.guild.channels
          .create("Results", {
            type: "text",
          })
          .then((channel) => {
            const results = message.client.channels.cache.find(
              (c) => c.id === "" + channel.id
            );
            console.log(message);
            results.send("Below is the correct code:");
            results.send(message.content);
            results.send("This was done in: ");
            results.send("Congrats: " + message.channel.name + ", nice win");
          });

        for (let i = 0; i < len; i++) {
          let removedChannel = args.activeChannels.shift();
          clearInterval(args.timeObjs[i]);
          removedChannel.delete();
        }
      } else if (codeSubmissionResult === "incorrect") {
        message.channel.send("Incorrect! Your output was " + result.output);
      } else if (codeSubmissionResult === "timeout") {
        message.channel.send("Incorrect! Your code has timed out :(");
      } else {
        message.channel.send("404: File not found.");
      }
    } catch (e) {
      console.log("error", e);
    }
  },
};
