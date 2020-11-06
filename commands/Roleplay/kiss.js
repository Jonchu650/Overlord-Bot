const Discord = require('discord.js');
module.exports = {
    name: 'kiss',
    description: 'Kiss a user!',
    usage: '<user>',
    args: true,
    aliases: ['smooch'],
    category: 'Roleplay',
    execute(message, args) {
        const User = args[0]
        const pingedUser = message.mentions.users.first();
        let Actions = [
            "http://i.imgur.com/QIPaYW3.gif",
            "http://i.imgur.com/wx3WXZu.gif",
            "http://i.imgur.com/ZzIQwHP.gif",
            "http://i.imgur.com/z3TEGxp.gif",
            "http://i.imgur.com/kJEr7Vu.gif",
            "http://i.imgur.com/IsIR4V0.gif",
            "http://i.imgur.com/bmeCqLM.gif",
            "http://i.imgur.com/LBWIJpu.gif",
            "http://i.imgur.com/p6hNamc.gif",
            "http://i.imgur.com/PPw83Ug.gif",
            "http://i.imgur.com/lZ7gAES.gif",
            "http://i.imgur.com/Bftud8V.gif",
            "http://i.imgur.com/AicG7H6.gif",
            "http://i.imgur.com/ql3FvuU.gif",
            "http://i.imgur.com/XLjH6zQ.gif",
            "http://i.imgur.com/W7arBvy.gif",
            "http://i.imgur.com/W9htMol.gif",
            "http://i.imgur.com/IVOBC8p.gif"
        ]
        var ActiondsRan = Actions[Math.floor(Math.random() * Actions.length)];
        let embed = new Discord.MessageEmbed()
            .setImage(ActiondsRan)
            .setColor('0xFFFF00')
        if (pingedUser) {
            embed.setTitle(`${message.author.username} Kisses ${pingedUser.username}`)
        } else {
            embed.setTitle(`${message.author.username} Kisses ${args.join(' ')}`)
        }
        message.channel.send(embed)
    },
};