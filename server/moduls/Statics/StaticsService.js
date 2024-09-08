const fs = require('fs');
const path = require('path');

module.exports = {
    getAudio (res, audioName, dir) {
        const filePath =  path.resolve(__dirname,'statics', 'audio', dir, audioName);
        console.log(filePath);
        res.set('content-type', 'audio/mp3');
        res.set('accept-ranges', 'bytes');
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    },

    getHTML (fileName) {

    },

    getImage(res, fileName, dir) {
        const filePath =  path.resolve(__dirname,'statics', 'image', dir, fileName);
        //console.log(filePath);
        res.set('content-type', 'image/png');
        res.set('accept-ranges', 'bytes');
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    }
}