const { ActivityType } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} is ready!`);

        let activities = [
                `music with EPI#1372`,
                `${client.user.username}`,
                `${
                    client.guilds.cache.size
                } servers | ${client.guilds.cache.reduce(
                    (a, b) => a + b.memberCount,
                    0
                )} users`,
                `🐛${client.commands.size} commands!`,
            ],
            i = 0;
        setInterval(
            () =>
                client.user.setActivity({
                    name: `${activities[i++ % activities.length]}`,
                    type: ActivityType.Listening,
                }),
            10000
        );
    },
};
