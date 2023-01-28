module.exports = {
    name: 'pause',
    description: 'Pausa a música',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'A música está pausada!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `A música está pausada, ${inter.member}... Tente novamente.`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `${queue.current.title} pausada` : `Ops! ${inter.member}... Tente novamente.` });
    },
};
