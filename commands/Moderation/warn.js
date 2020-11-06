const warns = require('../../models/warns')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'warn',
    description: 'Warns a user.',
    category: 'Moderation',
    usage: '<user> <reason>',
    args: true,
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have the right permissions for this command. You need the `MANAGE_ROLES` Permission.')
        let user = message.mentions.members.first();
        if (!user) return message.channel.send('Ping a user to warn them!')
        if (!args.slice(1).join(" ")) return message.channel.send('You did not specify a reason!')
        warns.findOne({ Guild: message.guild.id, User: user.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newWarns = new warns({
                    User: user.id,
                    Guild: message.guild.id,
                    Warns: [
                        {
                            Moderator: message.author.id,
                            Reason: args.slice(1).join(" ")
                        }
                    ]
                })
                newWarns.save()
                let newWarnEmbed = new MessageEmbed()
                    .setColor('0xFFF00')
                    .setAuthor(`${user.user.tag}`, user.user.avatarURL())
                    .setTitle(`${user.user.tag} Has been warned, They now have 1 warning.`)
                message.channel.send(newWarnEmbed)
            } else {
                data.Warns.unshift({
                    Moderator: message.author.id,
                    Reason: args.slice(1).join(" ")
                })
                data.save()
                let newWarnEmbed2 = new MessageEmbed()
                    .setColor('0xFFF00')
                    .setAuthor(`${user.user.tag}`, user.user.avatarURL())
                    .setTitle(`${user.user.tag} Has been warned, They now have ${data.Warns.length} warnings.`)
                message.channel.send(newWarnEmbed2)
            }
        })
    }
}