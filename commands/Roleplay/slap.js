const Discord = require('discord.js');
module.exports = {
    name: 'slap',
    description: 'Slap a user!',
    usage: '<user>',
    args: true,
    aliases: ['smack'],
    category: 'Roleplay',
    execute(message, args) {
        const User = args[0]
        const pingedUser = message.mentions.users.first();
        let Actions = [
            "http://i.imgur.com/GQtzDsV.gif",
            "http://i.imgur.com/rk8eqnt.gif",
            "http://i.imgur.com/UnzGS24.gif",
            "http://i.imgur.com/CHbRGnV.gif",
            "http://i.imgur.com/DvwnC0r.gif",
            "http://i.imgur.com/Ksy8dvd.gif",
            "http://i.imgur.com/b75B4qM.gif",
            "http://i.imgur.com/d9thUdx.gif",
            "http://i.imgur.com/iekwz4h.gif",
            "http://i.imgur.com/q7AmR8n.gif",
            "http://i.imgur.com/pDohPrm.gif"
        ]
        var ActiondsRan = Actions[Math.floor(Math.random() * Actions.length)];
        let embed = new Discord.MessageEmbed()
            .setImage(ActiondsRan)
            .setColor('0xFFFF00')
        if (pingedUser) {
            embed.setTitle(`${message.author.username} Slaps ${pingedUser.username}`)
        } else {
            embed.setTitle(`${message.author.username} Slaps ${args.join(' ')}`)
        }
        message.channel.send(embed)
    },
};