const Meme = require('../models/Meme');

exports.createMeme = (req, res) => {
    try {
        const newMeme = new Meme(req.body);
        console.log('🚀 - newMeme', newMeme);
        res.send(newMeme);
    } catch (error) {
        res.status(400).json({ msg: 'error al crear el meme' });
        console.log('🚀 - error', error);
    }
};
