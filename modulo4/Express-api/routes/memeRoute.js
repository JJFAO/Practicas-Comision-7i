const express = require('express');
const router = express.Router();
const memeController = require('../controllers/memeController');

router.post('/', memeController.createMeme);

module.exports = router;
