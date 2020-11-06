const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'snuggle',
    description: 'Snuggle a user!',
    usage: '<user>',
    args: true,
    aliases: ['cuddle'],
    category: 'Roleplay',
    execute(message, args) {
        const pingedUser = message.mentions.users.first();
        let Actions = [
            "http://i.imgur.com/xWTyaKY.gif",
			"http://i.imgur.com/K4lYduH.gif",
			"http://i.imgur.com/8kLQ55E.gif",
			"http://i.imgur.com/kd0F5bV.gif",
			"http://i.imgur.com/zG60zPk.gif",
			"http://i.imgur.com/ct76LIg.gif",
			"http://i.imgur.com/guBWT22.gif",
            "http://i.imgur.com/Asnv32U.gif",
            "https://media.discordapp.net/attachments/740047613209870358/772668564540883013/image0.gif"
        ]
        var ActiondsRan = Actions[Math.floor(Math.random() * Actions.length)];
        let embed = new Discord.MessageEmbed()
            .setImage(ActiondsRan)
            .setColor('0xFFFF00')
        if (pingedUser) {
            embed.setTitle(`${message.author.username} Snuggles ${pingedUser.username}`)
        } else {
            embed.setTitle(`${message.author.username} Snuggles ${args.join(' ')}`)
        }
        message.channel.send(embed)
    },
};