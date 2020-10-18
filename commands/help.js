module.exports = {
  name: "help",
  desription: "this is a help command",
  execute(message, args, author) {
    message.channel.send(
      "Welcome to Discode's help page, this is all of the information you will need to operate this bot. This bot will allow you to compete against " +
        "your friends in a race to see who can complete the challenge first! Look at the commands below to see what you want to do."
    );
    message.channel.send(
      "~help - Helps users find information with what commands are given."
    );
    message.channel.send(
      "~begin [names...] - Creates channels for competitors to go and begin to compete to win the coding competition! Ex: ~begin Bob Paul Emily \n~exit - delete any channel that was created by Discode."
    );
    message.channel.send(
      "~diff - Changes the difficulty of the questions given. (1 = Easy - 3 = Hard). Ex: ~diff 2"
    );
    message.channel.send(
      'Note: In order to succesfully submit your code, please surround it with triple back ticks (`). Ex: ``` print("test") ```'
    );
  },
};
