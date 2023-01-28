const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'save',
    description: 'Salve a música atual',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });

        inter.member.send({
            embeds: [
                new EmbedBuilder()
                    .setColor('Red')
                    .setTitle(`:arrow_forward: ${queue.current.title}`)
                    .setURL(queue.current.url)
                    .addFields(
                        { name: ':hourglass: Duração: ', value: `\`${queue.current.duration}\``, inline: true },
                        { name: 'Música de: ', value: `\`${queue.current.author}\``, inline: true },
                        { name: ':eyes: Visualizações: ', value: `\`${Number(queue.current.views).toLocaleString()}\``, inline: true },
                        { name: 'URL: ', value: `\`${queue.current.url}\`` }
                    )
                    .setThumbnail(queue.current.thumbnail)
                    .setFooter({text:`from the server ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false })})
            ]
        }).then(() => {
            return inter.reply({ content: `Te enviei o nome da música no privado!`, ephemeral: true });
        }).catch(error => {
            return inter.reply({ content: `Não consegui te enviar o nome no privado... Tente novamente.`, ephemeral: true });
        });
    },
};