module.exports = {
  name: "challenge",
  desription: "This allows users to challenge each other in code",
  execute(message, args) {
    console.log(args);
    for (let i = 0; i < args.length; i++) {

        let member = args[i];
        // new channel creation code
        message.message.guild.channels
            .create(member, {
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
            "\`\`\`class Solution { \n\t public int singleNumber(int[] nums) { \n\n } \t} \`\`\`"
        );
        });
    }

  },
};
