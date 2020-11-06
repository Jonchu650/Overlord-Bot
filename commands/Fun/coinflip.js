module.exports = {
    name: 'coinflip',
    description: 'Coinflip!',
    aliases: ['cf'],
    category: "Fun",
    execute(message, args) {
        var ballResponse = ["Heads!", "Tails!"];

        var ballrandom = Math.floor(Math.random() * ballResponse.length);

        message.channel.send(ballResponse[ballrandom]);
    },
};