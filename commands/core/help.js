const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Todos os comandos do Bob, o Bot!",
    showHelp: true,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription(commands.map(x => `${x.name}: ${x.description}`).join('\n'))

        inter.reply({ embeds: [embed] });
    },
};