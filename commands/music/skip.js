module.exports = {
    name: 'skip',
    description: 'Para a música atual',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `${queue.current.title} pulada ✅` : `Ops! ${inter.member}... Tente novamente.`});
    },
};