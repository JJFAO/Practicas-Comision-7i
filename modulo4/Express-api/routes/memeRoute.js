const express = require('express');
const router = express.Router();
const memeController = require('../controllers/memeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, memeController.createMeme);
router.get('/:memeId', memeController.getMeme);
router.delete('/:memeId', authMiddleware, memeController.deleteMeme);
router.get('/', memeController.getMemes);

module.exports = router;
