const Sequelize = require('sequelize');
const database = require('../db/connect');

const Card = database.define('card', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cvc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expirationDate: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Card;