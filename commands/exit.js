module.exports = {
  name: "exit",
  desription: "exit the current competition",
  async execute(message, args) {
    message.channel.delete();
  },
};
