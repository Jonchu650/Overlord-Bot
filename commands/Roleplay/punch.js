const Discord = require('discord.js');
module.exports = {
    name: 'punch',
    description: 'Punch a user!',
    usage: '<user>',
    args: true,
    aliases: ['attack'],
    category: 'Roleplay',
    execute(message, args) {
        const User = args[0]
        const pingedUser = message.mentions.users.first();
        let Actions = [
            "http://imgur.com/jVc3GGv.gif",
            "http://imgur.com/iekwz4h.gif",
            "http://imgur.com/AbRmlAo.gif",
            "http://imgur.com/o5MoMYi.gif",
            "http://imgur.com/yNfMX9B.gif",
            "http://imgur.com/bwXvfKE.gif",
            "http://imgur.com/6wKJVHy.gif",
            "http://imgur.com/kokCK1I.gif",
            "http://imgur.com/E3CtvPV.gif",
            "http://imgur.com/q7AmR8n.gif",
            "http://imgur.com/pDohPrm.gif"
        ]
        var ActiondsRan = Actions[Math.floor(Math.random() * Actions.length)];
        let embed = new Discord.MessageEmbed()
            .setImage(ActiondsRan)
            .setColor('0xFFFF00')
        if (pingedUser) {
            embed.setTitle(`${message.author.username} Punches ${pingedUser.username}`)
        } else {
            embed.setTitle(`${message.author.username} Punches ${args.join(' ')}`)
        }
        message.channel.send(embed)
    },
};