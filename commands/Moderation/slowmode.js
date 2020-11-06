const ms = require('ms');
const { MessageEmbed } = require('discord.js')
const db = require('../../models/db')
module.exports = {
    name: 'slowmode',
    description: 'Set the slowmode of the current channel.',
    category: "Moderation",
    usage: "<time>",
    args: true,
    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have the right permissions for this command. You need the `MANAGE_CHANNELS` Permission!')
        if (args[0] === 'off') {
            message.channel.setRateLimitPerUser(0)
            let slowmodeOffEmbed = new MessageEmbed()
                .setColor('0xFFF00')
                .setTitle('Slowmode in this channel has been turned off.')
            return message.channel.send(slowmodeOffEmbed)
        }
        if (isNaN(args[0])) return message.channel.send("Please enter a valid time in seconds so i can set the slowmode.")
        message.channel.setRateLimitPerUser(args[0])
        let slowmodeEmbed = new MessageEmbed()
            .setColor('0xFFF00')
            .setTitle(`I have set the slowmode in this channel to ${args[0]} second(s), To turn the slowmode off just sent \`${await db.get(`Prefix_${message.guild.id}`) ? await db.get(`Prefix_${message.guild.id}`) : "?"}slowmode off\``)
        message.channel.send(slowmodeEmbed)
    }
}