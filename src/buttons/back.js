module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando atualmente... Tente novamente.`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `Não há nenhuma música antes ${inter.member}... Tente novamente.`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`Tocando a música anterior!`, ephemeral: true});
}
