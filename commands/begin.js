module.exports = {
    name: "begin",
    desription: "starting the bot's functionality",
    execute(message, args) {
        message.channel.send('Begun!');
    }
}