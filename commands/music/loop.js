const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'Ativar ou desativar a repetição de músicas',
    voiceChannel: true,
    options: [
        {
        name: 'action' ,
        description: 'que ação você pretende fazer na fila',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Song', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === 1) return inter.reply({ content:`Desative primeiro a repetição (/loop Disable) ${inter.member}... Tente novamente.`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.QUEUE);

                return inter.reply({ content:success ? `Repetição de file **habilitada**` : `Ops! ${inter.member}... Tente novamente.` });
                break
            }
            case 'disable_loop': {
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                return inter.reply({ content:success ? `Repetição **desabilitada**` : `Ops! ${inter.member}... Tente novamente.` });
                break
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === 2) return inter.reply({ content:`Primeiro é necessário desabilitar a repetição atual (/loop Disable) ${inter.member}... Tente novamente.`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.TRACK);
                
                return inter.reply({ content:success ? `Repetição da música atual **habilitada**` : `Ops! ${inter.member}... Tente novamente.` });
                break
            }
        }
       
    },
};