const custom = require('../../models/custom');
const { MessageEmbed } = require('discord.js');
const db = require('../../models/db');
const { globalPrefix } = require('../../config.json')
module.exports = {
    name: 'cc',
    description: "Add or change a custom command in the server!",
    args: true,
    aliases: ['custom', 'cmd'],
    usage: '<command Name> <command response>',
    category: "Utility",
    cooldown: 5,
    execute(message, args) {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You do not have the right permissions for this command. You need the `MANAGE_GUILD` Permission.")
        if (args[0] === 'remove') {
            custom.findOne({ Guild: message.guild.id, Command: args[1].toLowerCase() }, async (err, data) => {
                if (err) throw err;
                if (!data) {
                    let noDataDeleteEmbed = new MessageEmbed()
                        .setColor('0xFFF00')
                        .setDescription(`Could not find the \`${args[1]}\` Command.`)
                    return message.channel.send(noDataDeleteEmbed)
                } else {
                message.channel.send(`Are you sure to want to delete command \`${args[1]}\`?\nType \`yes\` To confirm, Or type anything else to cancel.`)
                message.channel.awaitMessages(m => m.author.id == message.author.id,
                    { max: 1, time: 30000 }).then(collected => {
                        if (collected.first().content.toLowerCase() == 'yes') {
                            data.delete()
                            let deleteCmdEmbed = new MessageEmbed()
                                .setColor('0xFFF00')
                                .setDescription(`Successfully Deleted the \`${args[1]}\` command.`)
                            return message.channel.send(deleteCmdEmbed)

                        } else {
                            let cancelEmbed = new MessageEmbed()
                                .setColor('0xFFF00')
                                .setDescription('Canceled.')
                            return message.channel.send(cancelEmbed)
                        }
                    })
                }
            })
        } else {
            if (!args.slice(1).join(" ")) return message.channel.send('You did not specify your command response!')
            custom.findOne({ Guild: message.guild.id, Command: args[0].toLowerCase() }, async (err, data) => {
                if (err) throw err;
                if (data) {
                    data.Content = args.slice(1).join(" ")
                    data.save();
                    let dataEmbed = new MessageEmbed()
                        .setColor('0xFFF00')
                        .setDescription(`Successfully updated the \`${args[0].toLowerCase()}\` Command in this server.`)
                    return message.channel.send(dataEmbed)
                } else if (!data) {
                    let newData = new custom({
                        Guild: message.guild.id,
                        Command: args[0].toLowerCase(),
                        Content: args.slice(1).join(" ")
                    })
                    newData.save();
                    let newDataEmbed = new MessageEmbed()
                        .setColor('0xFFF00')
                        .setDescription(`Created the \`${args[0].toLowerCase()}\` Command.\nTo delete this command simply send \`${await db.get(`Prefix_${message.guild.id}`) ? await db.get(`Prefix_${message.guild.id}`) : globalPrefix}cc remove ${args[0]}\``)
                    message.channel.send(newDataEmbed)
                }
            })
        }
    }
}