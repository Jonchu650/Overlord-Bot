const { readdirSync } = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading('Command', ' Load status');
module.exports = (client) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            let fileName = file.slice(0, -3);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(fileName.split('.')[0], '✅')
            } else {
                table.addRow(fileName.split('.')[0], '❌ -> Missing a help.name, or help.name is not a string.')
                continue;
            } if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}