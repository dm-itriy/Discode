module.exports = {
    name: "begin",
    desription: "starting the bot's functionality",
    execute(message, args) {
        let time = 20;
        let timerObj = setInterval(function() {
            time -= 2;
            message.channel.send(`${time}`);
            }, 2000
        );
        setTimeout(() => { 
            clearInterval(timerObj); 
            message.channel.send(`Finished!`);
        }, 1000*time);
    }
}