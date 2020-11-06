const db = require('../../models/db');
const { MessageEmbed } = require('discord.js')
const { globalPrefix } = require('../../config.json')
module.exports = {
    name: 'prefix',
    description: 'Change or check the prefix of the current server!',
    usage: "[new prefix]",
    Category: 'Utility',
    cooldown: 5,
    async execute(message, args) {
        if (args.length) {
            if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You do not have the right permissions for this command. You need the `MANAGE_SERVER` Permission.')
            await db.set(`Prefix_${message.guild.id}`, args[0])
            let setPrefixEmbed = new MessageEmbed()
                .setColor('0xFFFF00')
                .setDescription(`Successfully set the prefix to \`${args[0]}\``)
            return message.channel.send(setPrefixEmbed);
        }
        let prefixembed = new MessageEmbed()
            .setColor('0xFFFF00')
            .setDescription(`Prefix for this guild is \`${await db.get(`Prefix_${message.guild.id}`) ? await db.get(`Prefix_${message.guild.id}`) : globalPrefix}\``)
        message.channel.send(prefixembed)
    }
}