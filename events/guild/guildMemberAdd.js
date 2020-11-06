const Canvas = require('canvas');
const welcome = require('../../models/welcomeChannel')
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 1}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
module.exports = async (client, member) => {
    const channel = member.guild.channels.cache.get(await welcome.get(`WelcomeChannel_${message.guild.id}`) ? await welcome.get(`WelcomeChannel_${message.guild.id}`) : '0')
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('../../../Overlord/Wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `Welcome, ${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Welcome, ${member.displayName}!`, canvas.width / 4.7, canvas.height / 1.8);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to **${member.guild.name}**, ${member}! You are member #${member.guild.memberCount}`, attachment);
}