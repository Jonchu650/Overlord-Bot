const warns = require('../../models/warns')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'warns',
    description: 'Check a users warnings.',
    category: 'Moderation',
    usage: '<user>',
    args: true,
    execute(message, args) {
        let user = message.mentions.members.first()
        if (!user) return message.channel.send('Ping a user to check their warnings!')
        warns.findOne({ Guild: message.guild.id, User: user.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data.length) {
                let noWarnsEmbed = new MessageEmbed()
                    .setColor('0xFFF00')
                    .setAuthor(`${user.user.tag}`, user.avatarURL())
                    .setTitle(`${user.user.tag} Has no warnings.`)
                return message.channel.send(noWarnsEmbed)
            }
        })
    }
}