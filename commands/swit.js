module.exports = {
    name: "swit",
    desription: "change of state",
    execute(message, args) {
        message.channel.send('Switched!');
    }
}