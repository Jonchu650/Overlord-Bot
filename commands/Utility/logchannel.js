const log = require('../../models/logChannel');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'logchannel',
    description: 'Check or change the log channel of the current server! Logging keeps you updated on whenever a message is deleting or edited!',
    aliases: ['log', 'lc'],
    cooldown: 10,
    category: 'Utility',
    async execute(message, args) {
        if (args.length) {
            if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You do not have the right permissions for this command. You need the `MANAGE_SERVER` Permission!');
            if (args[0] === 'off') {
                log.delete(`LogChannel_${message.guild.id}`)
                let logOffEmbed = new MessageEmbed()
                    .setColor('0xFFF00')
                    .setDescription('Logchannel for this guild has been removed.')
                return message.channel.send(logOffEmbed)
            }
            let logChannel = message.mentions.channels.first();
            if (!logChannel) return message.channel.send('Please enter a valid channel to set it to the logchannel!')
            await log.set(`LogChannel_${message.guild.id}`, logChannel.id)
            let setLogEmbed = new MessageEmbed()
                .setColor('0xFFF00')
                .setDescription(`Succesfully set the log channel to <#${logChannel.id}>!`)
            return message.channel.send(setLogEmbed)
        }
        let logChannelEmbed = new MessageEmbed()
            .setColor('0xFFF00')
            .setDescription(`Log channel for this guild is ${await log.get(`LogChannel_${message.guild.id}`) ? '<#' + await log.get(`LogChannel_${message.guild.id}`) + '>' : 'None!'}`)
        message.channel.send(logChannelEmbed)
    }
}