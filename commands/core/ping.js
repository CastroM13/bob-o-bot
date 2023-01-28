const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Jogue Ping-Pong com Bob!",
    async execute({ client, inter }) {

        const m = await inter.reply("Ping?")
        inter.editReply(`Pong! Demorei ${Math.round(client.ws.ping)}ms para responder`)

    },
};