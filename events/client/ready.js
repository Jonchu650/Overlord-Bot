module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence('Visual Studio Code')
        .catch(console.error);
    client.user.setStatus('dnd')
}