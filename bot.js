const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
["command", "event"].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});
process.on('unhandledRejection', error => {
	console.error('Uncaught Promise Rejection', error)
});
client.login("Token here")