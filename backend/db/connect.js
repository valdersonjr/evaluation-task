require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({ 
    dialect: "postgres",
    host: "localhost",
    port: "5432",
    database: "evaluation_task",
    username: "valdersonjr",
    password: "sorvete123",
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    },
});

module.exports = sequelize;