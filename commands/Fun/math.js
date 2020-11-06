const { calculator } = require('../../models/function')
module.exports = {
    name: 'math',
    description: "Need a calculator? Here ya go!",
    usage: "<num 1> <type of equation> <num 2>",
    args: true,
    category: 'Fun',
    execute(message, args) {
        if (!args[0]) return message.channel.send('Please specify your first number!')

        if (!args[1]) return message.channel.send('Please specify the type of equation!')

        if (!args[2]) return message.channel.send('Please specify your second number!')

        if (isNaN(args[0])) return message.channel.send('Please enter a valid number.');

        if (isNaN(args[2])) return message.channel.send('Please enter a valid number.');

        message.channel.send(calculator(parseInt(args[0]), args[1], parseInt(args[2])));
    }
}