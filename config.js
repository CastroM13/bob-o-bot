module.exports = {
    app: {
        token: 'ODM5MDk2NzY4NTAyMzAwNzMy.GlPO8q.bZD9HWIGHv-Rcbxhx2M3Osm6fIS5txGv0tY3Y4',
        playing: 'músicas',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
