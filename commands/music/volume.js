const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'Ajusta o volume',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'a quantidade do volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `Já está nesse volume, seu banana! ${inter.member}`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `Volume alterado para **${vol}**/**${maxVol}**% 🔊` : `Ops! ${inter.member}... Tente novamente.`});
    },
};