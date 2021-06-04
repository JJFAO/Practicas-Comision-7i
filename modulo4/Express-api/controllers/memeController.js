const Meme = require('../models/Meme');

exports.createMeme = async (req, res) => {
    try {
        const { usuario, body } = req;
        const newMeme = new Meme({ ...body, createdAt: Date.now(), creator: usuario.id });
        await newMeme.save();
        res.send(newMeme);
    } catch (error) {
        res.status(400).json({ msg: 'error al crear el meme' });
        console.log('🚀 - error', error);
    }
};

exports.getMeme = async (req, res) => {
    try {
        const { memeId } = req.params;
        const meme = await Meme.findById(memeId);
        res.send(meme);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener el meme' });
        console.log('🚀 - error', error);
    }
};

exports.deleteMeme = async (req, res) => {
    try {
        const { usuario } = req;
        const { memeId } = req.params;
        const meme = await Meme.findById(memeId);
        if (!meme.creator.equals(usuario.id)) {
            return res.status(403).json({ msg: 'no tiene permitido eliminar este meme' });
        }
        await meme.delete();
        res.send({ msg: 'Meme eliminado' });
    } catch (error) {
        res.status(400).json({ msg: 'error al eliminar el meme' });
        console.log('🚀 - error', error);
    }
};

exports.getMemes = async (req, res) => {
    try {
        const memes = await Meme.find().populate({ path: 'creator', select: 'nombre' });
        res.send(memes);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener el memes' });
        console.log('🚀 - error', error);
    }
};
