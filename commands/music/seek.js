const ms = require('ms');
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'seek',
    description: 'Pule até uma parte específica da música',
    voiceChannel: true,
    options: [
    {
        name: 'time',
        description: 'momento da música que você quer tocar',
        type: ApplicationCommandOptionType.String,
        required: true,
    }
    ],
    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando atualmente ${inter.reply}... Tente novamente.`, ephemeral: true });

        const timeToMS = ms(inter.options.getString('time'));

        if (timeToMS >= queue.current.durationMS) return inter.reply({ content:`Tempo inválido ${inter.member}... Tente novamente.\n*Tente por exemplo **5s, 10s, 20 seconds, 1m**...*`, ephemeral: true });

        await queue.seek(timeToMS);

        inter.reply({ content: `Música pulada para **${ms(timeToMS, { long: true })}** ✅`});
    },
};