const Discord = require('discord.js');
module.exports = {
	name: 'pat',
	description: 'Pat a user!',
	usage: '<user>',
    args: true,
	category: 'Roleplay',
	execute(message, args) {
		const User = args[0]
		const pingedUser = message.mentions.users.first();
		let Actions = [
			"http://i.imgur.com/Y2DrXtT.gif",
			"http://i.imgur.com/G7b4OnS.gif",
			"http://i.imgur.com/nQqH0Xa.gif",
			"http://i.imgur.com/mCtyWEr.gif",
			"http://i.imgur.com/Cju6UX3.gif",
			"http://i.imgur.com/0YkOcUC.gif",
			"http://i.imgur.com/QxZjpbV.gif",
			"http://i.imgur.com/0FLNsZX.gif",
			"http://i.imgur.com/nsiyoRQ.gif",
			"http://i.imgur.com/kWDrnc3.gif",
			"http://i.imgur.com/5c0JGlx.gif",
			"http://i.imgur.com/SuU9WQV.gif",
			"http://i.imgur.com/UuYqD7v.gif",
			"http://i.imgur.com/7wZ6s5M.gif",
			"http://i.imgur.com/VuucXay.gif",
			"http://i.imgur.com/pnb1k5P.gif",
			"http://i.imgur.com/cDKGlTX.gif",
			"http://i.imgur.com/JjWLlcz.gif",
			"http://i.imgur.com/4SiEFQq.gif",
			"http://i.imgur.com/JfRGrgw.gif",
			"http://i.imgur.com/HiKI49x.gif",
			"http://i.imgur.com/VBCPpjk.gif",
			"http://i.imgur.com/qL5SShC.gif",
			"http://i.imgur.com/fvgSWgw.gif",
			"http://i.imgur.com/bOrLVXd.gif",
			"http://i.imgur.com/UwcwNiU.gif",
			"http://i.imgur.com/Y9iZrGG.gif",
			"http://i.imgur.com/75FpUOd.gif",
			"http://i.imgur.com/V2VFPSj.gif",
			"http://i.imgur.com/RFd1Gar.gif",
			"http://i.imgur.com/bgXEKqK.gif",
			"http://i.imgur.com/rMeGX0k.gif",
			"http://i.imgur.com/SpoJHzQ.gif",
			"http://i.imgur.com/ZCucIDe.gif",
			"http://i.imgur.com/b2dC2pu.gif",
			"http://i.imgur.com/0SBqpld.gif",
			"http://i.imgur.com/FAHxGpn.gif",
			"http://i.imgur.com/Q8i2yZz.gif",
			"http://i.imgur.com/46QOOlu.gif",
			"http://i.imgur.com/XhuyMe4.gif",
			"http://i.imgur.com/1d9y1s1.gif",
			"http://i.imgur.com/npxQPMH.gif",
			"http://i.imgur.com/VcvVbSb.gif",
			"http://i.imgur.com/G7WpBeD.gif",
			"http://i.imgur.com/VMQhPNA.gif",
			"http://i.imgur.com/xbqhigm.gif",
			"http://i.imgur.com/ilc8zXi.gif",
			"http://i.imgur.com/4GgbYst.gif",
			"http://i.imgur.com/1mr4NWL.gif",
			"http://i.imgur.com/wXw7IjY.gif"
		]
		var ActiondsRan = Actions[Math.floor(Math.random() * Actions.length)];
		let embed = new Discord.MessageEmbed()
			.setImage(ActiondsRan)
			.setColor('0xFFFF00')
		if (pingedUser) {
			embed.setTitle(`${message.author.username} Pats ${pingedUser.username}`)
		} else {
			embed.setTitle(`${message.author.username} Pats ${args.join(' ')}`)
		}
		message.channel.send(embed)
	},
};