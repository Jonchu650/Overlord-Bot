const Discord = require('discord.js');
module.exports = {
    name: 'poke',
    description: 'Poke a user!',
    usage: '<user>',
    args: true,
    aliases: ['tap'],
    category: 'Roleplay',
    execute(message, args) {
        const User = args[0]
        const pingedUser = message.mentions.users.first();
        let Actions = [
            "http://i.imgur.com/WG8EKwM.gif",
            "http://i.imgur.com/dfoxby7.gif",
            "http://i.imgur.com/TzD1Ngz.gif",
            "http://i.imgur.com/i1hwvQu.gif",
            "http://i.imgur.com/bStOFsM.gif",
            "http://i.imgur.com/1PBeB9H.gif",
            "http://i.imgur.com/3kerpju.gif",
            "http://i.imgur.com/uMBRFjX.gif",
            "http://i.imgur.com/YDJFoBV.gif",
            "http://i.imgur.com/urC9B1H.gif"
        ]
        var ActiondsRan = Actions[Math.floor(Math.random() * Actions.length)];
        let embed = new Discord.MessageEmbed()
            .setImage(ActiondsRan)
            .setColor('0xFFFF00')
        if (pingedUser) {
            embed.setTitle(`${message.author.username} Pokes ${pingedUser.username}`)
        } else {
            embed.setTitle(`${message.author.username} Pokes ${args.join(' ')}`)
        }
        message.channel.send(embed)
    },
};