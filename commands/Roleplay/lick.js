const Discord = require('discord.js');
module.exports = {
    name: 'lick',
    description: 'Lick a user!',
    usage: '<user>',
    args: true,
    aliases: ['taste'],
    category: 'Roleplay',
    execute(message, args) {
        const User = args[0]
        const pingedUser = message.mentions.users.first();
        let Actions = [
            "https://cdn.miki.ai/images/5112e59f-798d-4085-b947-a44dc03f6517.gif",
            "https://cdn.miki.ai/images/2187d457-703a-43a0-93de-3304774f972f.gif",
            "https://cdn.miki.ai/images/165eb268-7772-47d9-9e06-4f8c4b6fb1d0.gif",
            "https://cdn.miki.ai/images/82b45d73-4b6a-4886-b79f-d43282193843.gif",
            "https://cdn.miki.ai/images/c397769d-7563-43e1-a21e-e89498371bff.gif",
            "https://cdn.miki.ai/images/f56b349d-507d-46df-849a-584b718c345c.gif",
            "https://cdn.miki.ai/images/f38d5382-120b-4b26-9269-e1218eed4308.gif"
        ]
        var ActiondsRan = Actions[Math.floor(Math.random() * Actions.length)];
        let embed = new Discord.MessageEmbed()
            .setImage(ActiondsRan)
            .setColor('0xFFFF00')
        if (pingedUser) {
            embed.setTitle(`${message.author.username} Licks ${pingedUser.username}`)
        } else {
            embed.setTitle(`${message.author.username} Licks ${args.join(' ')}`)
        }
        message.channel.send(embed)
    },
};