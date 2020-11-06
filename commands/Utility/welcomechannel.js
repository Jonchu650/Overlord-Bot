const welcome = require('../../models/welcomeChannel');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'welcomechannel',
    description: 'Check or change the welcome channel of the current server!',
    aliases: ['welcome', 'wc'],
    category: "Utility",
    cooldown: 5,
    async execute(message, args) {
        if (args.length) {
            if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You do not have the right permissions for this command. You need the `MANAGE_SERVER` Permission!');
            if (args[0] === 'off') {
                welcome.delete(`WelcomeChannel_${message.guild.id}`)
                let logOffEmbed = new MessageEmbed()
                    .setColor('0xFFF00')
                    .setDescription('Welcome Channel for this guild has been removed.')
                return message.channel.send(logOffEmbed)
            }
            let logChannel = message.mentions.channels.first();
            if (!logChannel) return message.channel.send('Please enter a valid channel to set it to the welcomeChannel!')
            await welcome.set(`WelcomeChannel_${message.guild.id}`, logChannel.id)
            let setLogEmbed = new MessageEmbed()
                .setColor('0xFFF00')
                .setDescription(`Succesfully set the welcome channel to <#${logChannel.id}>!`)
            return message.channel.send(setLogEmbed)
        }
        let logChannelEmbed = new MessageEmbed()
            .setColor('0xFFF00')
            .setDescription(`Welcome channel for this guild is ${await welcome.get(`WelcomeChannel_${message.guild.id}`) ? '<#' + await welcome.get(`WelcomeChannel_${message.guild.id}`) + '>' : 'None!'}`)
        message.channel.send(logChannelEmbed)
    }
}