const db = require('./data');

class Music {
    constructor(id, name, album, artist){
        this.id = id;
        this.name = name;
        this.album = album;
        this.artist = artist;
    };
    static getAll(){
        return db.any(`select * from music`)
            .then((musicDataArray)=>{
                return musicDataArray.map((data)=>{
                    return new Music(data.id, data.name, data.album, data.artist);
                });
            });
    };

    static getByArtist(name){
        return db.any(`select * from music where artist=$1`,[name])
            .then((musicDataArray)=>{
                return musicDataArray.map((data)=>{
                    return new Music(data.id, data.name, data.album, data.artist);
                });
            });
    };
};

module.exports = Music