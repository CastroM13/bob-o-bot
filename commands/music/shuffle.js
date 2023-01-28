module.exports = {
    name: 'shuffle',
    description: 'Rearranja a fila',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `Não há nenhuma música após a atual ${inter.member}... Tente novamente.`, ephemeral: true });

        await queue.shuffle();

        return inter.reply({ content:`Fila rearranjada **${queue.tracks.length}** song(s) ! ✅`});
    },
};