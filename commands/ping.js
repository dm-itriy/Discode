module.exports = {
    name: "ping",
    desription: "this is a ping command",
    execute(message, args) {
        message.channel.send('Hello');
    }
}