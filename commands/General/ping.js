module.exports = {
    name: 'ping',
    description: 'Check the ping of the bot.',
    category: "General",
    execute(message, args) {
        message.channel.send('Obtaining ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`Pong! **${ping}ms**`);
        })
    }
}