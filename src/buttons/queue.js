const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando atualmente... Tente novamente.`, ephemeral: true });

    if (!queue.tracks[0]) return  inter.reply({ content: `Não há nenhuma música após a atual ${inter.member}... Tente novamente.`, ephemeral: true });

        const methods = ['', '🔁', '🔂'];

        const songs = queue.tracks.length;

        const nextSongs = songs > 5 ? `E outras **${songs - 5}** músicas...` : `Na playlist há **${songs}** músicas...`;

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`)

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setThumbnail(inter.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({name: `Server queue - ${inter.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`Current ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`)
        .setTimestamp()

        inter.reply({ embeds: [embed], ephemeral: true });
}
