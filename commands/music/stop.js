module.exports = {
    name: 'stop',
    description: 'Para a música',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `Música interrompida!`});
    },
};