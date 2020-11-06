const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "purge",
    description: "Clear messages in a channel!",
    usage: "<amount>",
    aliases: ['clear', 'clean'],
    args: true,
    category: "Moderation",
    execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have the right permissions for this command. You need the `MANAGE_MESSAGES` Permissions.')
        let amount = parseInt(args[0]) + 1;
        if (isNaN(amount)) return message.channel.send('Please enter a amount to delete messages in this channel.')
        else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }
        message.channel.bulkDelete(amount, true);
        let purgeEmbed = new MessageEmbed()
            .setColor('0xFFF00')
            .setTitle(`I have cleared ${amount - 1} Messages in this channel.`)
        message.channel.send(purgeEmbed)
    }
}