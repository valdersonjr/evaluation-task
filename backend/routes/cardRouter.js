const express = require('express');
const router = express.Router();

const CardController = require('../controller/cardController');

router.get('/', CardController.getAllCards);

router.post('/add', CardController.addCard);

module.exports = router