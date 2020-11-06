const db = require('../../models/db');
module.exports = {
    name: 'say',
    description: "Make me say something!",
    args: true,
    usage: "<message>",
    category: "Fun",
    async execute(message, args) {
        if (message.content.includes('@everyone')) return message.channel.send('Yeah, No.')
        if (message.content.includes('@here')) return message.channel.send('Yeah, No.')
        let usre = message.mentions.roles.first();
        if (usre) return message.channel.send('Yeah, No.')
        message.channel.send(args.join(" "))
        message.delete()
    }
}