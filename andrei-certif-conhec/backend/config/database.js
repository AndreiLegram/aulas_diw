const db_name = "andrei_certif_conhec"
const db_username = "root"
const db_password = ""

const Sequelize = require("sequelize");

// CREATE DATABASE andrei_certif_conhec;

const sequelize = new Sequelize(db_name, db_username, db_password, {
   host: "127.0.0.1",
   dialect: "mysql",
});

module.exports = sequelize;
