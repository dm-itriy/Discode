module.exports = {
    name: "challenge",
    desription: "This allows users to challenge each other in code",
    execute(message, args, author) {
        for(let i = 1; i < args.length; i++){
            // create a theoretical role
            /*
            guild.roles.create({
                data: {
                    name: competitor ${i},
                    color: 'BLUE',
                },
                reason: 'For coding competition',
            })
            */
            // assign that theoretical role to the arg[i] user
            /*
            let role = message.guild.roles.cache.find(r => r.name === competitor ${i});
            let member = args[i].mentions.members.first();
            */
        }

        // new channel creation code
          message.guild.channels
          .create("New Channel", {
            type: 'text'
          });
        message.channel.send('New channel created');
        // 

        // this is to remove future role give name of role as role
        // member.roles.remove(role).catch(console.error);
    }
}