module.exports = {
    name: 'back',
    description: "Voltar para a música anterior",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });

        if (!queue.previousTracks[1]) return inter.reply({ content: `Não há nenhuma música anterior, ${inter.member}... Tente novamente.`, ephemeral: true });

        await queue.back();

        inter.reply({ content:`Tocando música anterior!`});
    },
};