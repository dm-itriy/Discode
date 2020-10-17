module.exports = {
    name: "begin",
    desription: "starting the bot's functionality",
    execute(message, args) {

        let time = args * 1000;
        console.log(time);
        let timerObj = setInterval(function() {
            time -= 600000;
            message.channel.send(`${time/60000} minutes remaining!`);
            }, 600000
        );

        setTimeout(() => { 
            clearInterval(timerObj); 
            message.channel.send(`Finished!`);
        }, time);

    }
}