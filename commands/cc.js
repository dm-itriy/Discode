module.exports = {
    name: "cc",
    desription: "this is a create role command",
    execute(message, args, author) {
        let i = 0;
        /*
        message.guild.roles.create{
            data: {
                name: competitor ${i},
                color: 'BLUE',
            },
            reason: 'For coding competition',
        })
        */
        let role = message.member.roles.cache(r => r.name === `competitor ${i}`);
        author.roles.add(role);

        message.channel.send('New role created competitor 0 and author of this message is that role');
    }
}