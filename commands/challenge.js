module.exports = {
  name: "challenge",
  desription: "This allows users to challenge each other in code",
  execute(message, args) {
    for (let i = 1; i < args.length; i++) {
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
            let role = message.guild.roles.cache.find(r => r.name === `competitor ${i}`);
            let member = args[i].mentions.members.first();
            */
    }

    // new channel creation code
    message.message.guild.channels
      .create("User 1 Channel", {
        type: "text",
      })
      .then((channel) => {
        const channel1 = message.client.channels.cache.find(
          (c) => c.id === "" + channel.id
        );
        // This is the question name:
        channel1.send(
          "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?"
        );
        // send starter code
        channel1.send(
          "class Solution { \n\t public int singleNumber(int[] nums) { \n\n } \t}"
        );
      });
  },
};
