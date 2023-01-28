const maxVol = client.config.opt.maxVol;
module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando atualmente... Tente novamente.`, ephemeral: true });

    const vol = Math.floor(queue.volume + 5)

    if (vol > maxVol ) return inter.reply({ content: `Não consigo aumentar mais o volume ${inter.member}... Tente novamente.`, ephemeral: true })

    if (queue.volume === vol) return inter.reply({ content: `Já está nesse volume, bananinha! ${inter.member}... Tente novamente.`, ephemeral: true });

    const success = queue.setVolume(vol);

    return inter.reply({ content:success ? `Volume alterado para **${vol}**/**${maxVol}**% 🔊` : `Ops! ${inter.member}... Tente novamente.`, ephemeral: true});
}