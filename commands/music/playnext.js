const { ApplicationCommandOptionType } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'playnext',
    description: "Força uma música a ser a próxima a tocar",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'a música',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) {
	await inter.deferReply();
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.editReply({ content: `Nenhuma música está tocando, ${inter.member}... Tente novamente.`, ephemeral: true });

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.editReply({ content: `No results found ${inter.member}... Tente novamente.`, ephemeral: true });

       if (res.playlist) return inter.editReply({ content: `This command dose not support playlist's ${inter.member}... Tente novamente.`, ephemeral: true });

        queue.insert(res.tracks[0], 0)

        await inter.editReply({ content:`Track has been inserted into the queue... it will play next 🎧`});

    }
}
