const Card = require('../model/card');

const { cardHasValidFormat, cardDateHasExpired, cardHasValidAmericanExpressPan } = require('../service/cardService');


exports.getAllCards = async function (req, res) {
    Card.findAll()
        .then(card => {
            return res.status(200).json({
                card: card
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err
            });
        });
}

exports.addCard = async function (req, res) {
    const { pan, cvc, expirationDate } = req.body;

    if(!pan || !cvc || !expirationDate) {
        return res.status(400).json({
            err: "Missing required fields"
        });
    }

    if(!cardHasValidFormat(expirationDate)) {
        return res.status(400).json({
            err: "Invalid date format"
        });
    }

    if(cardDateHasExpired(expirationDate)) {
        return res.status(400).json({
            err: "Card has expired"
        });
    }

    if(cardHasValidAmericanExpressPan(pan) && cvc.toString().length !== 4) {
        return res.status(400).json({
            err: "Invalid card cvc"
        });
    }
    
    if(!cardHasValidAmericanExpressPan(pan) && pan.length !== 16) {
        return res.status(400).json({
            err: "Invalid card pan"
        });
    }

    Card.create({
        pan: pan,
        cvc: cvc,
        expirationDate: expirationDate
    })
        .then(card => {
            return res.status(201).json({
                card: card
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err
            });
        });
}