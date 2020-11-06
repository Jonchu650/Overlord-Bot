const Discord = require('discord.js');
const log = require('../../models/logChannel');
module.exports = async (client, oldMessage, newMessage) => {
    if (oldMessage.channel.type === 'dm') return;
    const channel = oldMessage.guild.channels.cache.get(await log.get(`LogChannel_${oldMessage.guild.id}`) ? await log.get(`LogChannel_${oldMessage.guild.id}`) : '0')
    if (!channel) return;
    if (oldMessage.content === newMessage.content) return;
    let UpdatedEmbed = new Discord.MessageEmbed()
		.setColor(0xFFFF00)
		.setAuthor(`${newMessage.author.tag}`, newMessage.author.avatarURL())
		.setDescription(`A message was updated in <#${oldMessage.channel.id}>`)
		.addField(`Old Message`, oldMessage.content)
		.addField(`New Message`, newMessage.content)
		.setFooter(`User ID: ${oldMessage.author.id}`)
		.setTimestamp()
	channel.send(UpdatedEmbed);
}