module.exports = {
    name: "ping2",
    desription: "this is a second ping command",
    execute(message, args) {
        message.channel.send('Hello2');
    }
}