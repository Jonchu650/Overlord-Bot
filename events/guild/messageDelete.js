const Discord = require('discord.js');
const log = require('../../models/logChannel');
module.exports = async (client, message) => {
    if (message.channel.type === 'dm') return;
    const channel = message.guild.channels.cache.get(await log.get(`LogChannel_${message.guild.id}`) ? await log.get(`LogChannel_${message.guild.id}`) : '0')
    if (!channel) return;
	let deleteEmbed = new Discord.MessageEmbed()
		.setColor(0x8B0000)
		.setAuthor(`${message.author.tag}`, message.author.avatarURL())
		.setDescription(`A message was deleted in <#${message.channel.id}>`)
		.addField('Content', message.content || "Could not get the message content.")
		.setFooter(`User ID: ${message.author.id}`)
		.setTimestamp()
	channel.send(deleteEmbed);
}