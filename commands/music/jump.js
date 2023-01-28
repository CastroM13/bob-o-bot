const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'jump',
    description: "Pule para uma música específica na fila.",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'o nome ou URL da música que você quer tocar',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'a posição da música na fila.',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Não há música tocando ${inter.member}... Tente novamente.`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `Você tem que usar uma das opções para pular a música ${inter.member}... Tente novamente.`, ephemeral: true });

            if (track) {
        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.skipTo(song)
                return inter.reply({ content: `pulado para ${track} ✅` });
            }
        }
        return inter.reply({ content: `Hmmm... Não encontrei ${track} ${inter.member}! Tente o URL ou outra forma de escrever.`, ephemeral: true });    
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks[index].title
        if (!trackname) return inter.reply({ content: `This track dose not seem to exist ${inter.member}...  try again ?❌`, ephemeral: true });   
        queue.skipTo(index);
        return inter.reply({ content: `Jumped to ${trackname}  ✅` });
    }
         
    }
}