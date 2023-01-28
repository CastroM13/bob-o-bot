module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando atualmente... Tente novamente.`, ephemeral: true });
    
    const success = queue.skip();

    return inter.reply({ content: success ? `${queue.current.title} pulada` : `Ops! ${inter.member}... Tente novamente.`, ephemeral: true});
}