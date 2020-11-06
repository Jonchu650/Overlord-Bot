const Discord = require('discord.js');
module.exports = {
	name: 'hug',
	description: 'Hug a user!',
	usage: '<user>',
    args: true,
	category: 'Roleplay',
	execute(message, args) {
		const User = args[0]
		const pingedUser = message.mentions.users.first();
		let Actions = [
			"http://i.imgur.com/FvSnQs8.gif",
			"http://i.imgur.com/rXEq7oU.gif",
			"http://i.imgur.com/b6vVMQO.gif",
			"http://i.imgur.com/KJNTXm3.gif",
			"http://i.imgur.com/gn18SX8.gif",
			"http://i.imgur.com/SUdqF9w.gif",
			"http://i.imgur.com/7C36d39.gif",
			"http://i.imgur.com/ZOINyyw.gif",
			"http://i.imgur.com/Imxjcio.gif",
			"http://i.imgur.com/GNUeLdo.gif",
			"http://i.imgur.com/K52NZ36.gif",
			"http://i.imgur.com/683fWwC.gif",
			"http://i.imgur.com/0RgdLt4.gif",
			"http://i.imgur.com/jxPPkM8.gif",
			"http://i.imgur.com/oExwffx.gif",
			"http://i.imgur.com/pCZpL5h.gif",
			"http://i.imgur.com/GvQOwuy.gif",
			"http://i.imgur.com/cLHRyeB.gif",
			"http://i.imgur.com/FVbzx1A.gif",
			"http://i.imgur.com/gMLlFNC.gif",
			"http://i.imgur.com/FOdbhav.gif",
			"http://i.imgur.com/xWTyaKY.gif",
			"http://i.imgur.com/MrEMpE6.gif",
			"http://i.imgur.com/Y9sMTP4.gif",
			"https://media.discordapp.net/attachments/740046451786252374/772666833865146418/image0.gif"
		]
		var ActiondsRan = Actions[Math.floor(Math.random() * Actions.length)];
		let embed = new Discord.MessageEmbed()
			.setImage(ActiondsRan)
			.setColor('0xFFFF00')
		if (pingedUser) {
			embed.setTitle(`${message.author.username} Hugs ${pingedUser.username}`)
		} else {
			embed.setTitle(`${message.author.username} Hugs ${args.join(' ')}`)
		}
		message.channel.send(embed)
	},
};