const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ban',
    description: "Ban a user from the server!",
    usage: "<user> [reason]",
    category: "Moderation",
    args: true,
    execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You do not have the right permissions for this command. You need the `BAN_MEMBERS` Permission.')
        const User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
        if (!User) return message.channel.send("Please ping a valid user to ban them.")
        if (User.hasPermission("BAN_MEMBERS")) return message.channel.send("You cannot ban this user.")
        let banReason = args.slice(1).join(" ")
        if (!banReason) {
            banReason = "No reason specified"
        }

        try {
            User.ban({ reason: banReason })
        } catch {
            return message.channel.send('I could not ban this user.')
        }
        let banEmbed = new MessageEmbed()
            .setColor('0xFFF00')
            .setDescription(`**${User.user.tag}** Has been banned.`)
        message.channel.send(banEmbed)
    }
}