const StaticsService = require('./StaticsService');
const path = require('path');

module.exports = {
    getAudioProposal (req, res) {
        const audioName = req.params.fileName;
        StaticsService.getAudio(res, audioName, 'proposals');

    },

    getAudioWords (req, res) {
        const audioName = req.params.fileName;
        StaticsService.getAudio(res, audioName, 'words');
    },

    getHtml (req, res) {
        const fileName = req.params.fileName;
        //const filePath =  `${__dirname}/statics/html/${fileName}`;
        const filePath =  path.resolve(__dirname,'statics', 'html', fileName);
        console.log(filePath);
        res.sendFile(filePath);
    },

    getImageUser (req, res) {
        const fileName = req.params.fileName;
        StaticsService.getImage(res, fileName, 'users');
    }
}