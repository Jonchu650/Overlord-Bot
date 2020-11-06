const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("../../models/db");
const { ownerId, globalPrefix } = require('../../config.json');
const prefix = require('../../commands/Utility/prefix');
const cooldowns = new Discord.Collection();
const custom = require('../../models/custom');
module.exports = async (client, message) => {
	if (message.channel.type === 'dm') return;
	if (message.author.bot) return;
	let prefix;
	let Newprefix = await db.get(`Prefix_${message.guild.id}`)
	if (Newprefix) prefix = await db.get(`Prefix_${message.guild.id}`);
	if (!Newprefix) prefix = globalPrefix;
	if (!message.content.startsWith(prefix)) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (command) {
		if (command.ownerOnly && message.author.id !== ownerId) return;

		if (command.args && !args.length) {
			let reply = `You didn't provide any arguments, ${message.author}!`;

			if (command.usage) {
				reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
			}

			return message.channel.send(reply);
		}
		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());
		}

		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;

		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		timestamps.delete(ownerId)
		timestamps.delete(client.user.id)
		try {
			command.execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!\n' + error);
		}
	} else {
		custom.findOne({ Guild: message.guild.id, Command: commandName }, async (err, data) => {
			if (err) throw err;
			if (data) return message.channel.send(data.Content)
			else return;
		})
	} 
}