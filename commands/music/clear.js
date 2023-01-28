module.exports = {
    name: 'clear',
    description: 'Limpe todas as músicas da fila',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `Não há nenhuma música após a atual ${inter.member}... Tente novamente.`, ephemeral: true });

        await queue.clear();

        inter.reply(`A fila foi limpada`);
    },
};