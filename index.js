/**
 * AnimeciX Nuvio Entegre Oynatıcı Motoru
 */
const Provider = {
    getStreams: function(query) {
        return new Promise(function(resolve, reject) {
            try {
                const animeAdi = query.title || "Anime";
                const sezon = query.season || 1;
                const bolum = query.episode || 1;

                const streams = [
                    {
                        name: "AnimeciX Sunucu 1 (1080p) - " + animeAdi + " S" + sezon + "E" + bolum,
                        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        quality: "1080p",
                        type: "url",
                        headers: {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                            "Referer": "https://animecix.net/"
                        }
                    }
                ];

                resolve(streams);
            } catch (error) {
                console.log("Hata: " + error.message);
                resolve([]);
            }
        });
    }
};

export default Provider;
