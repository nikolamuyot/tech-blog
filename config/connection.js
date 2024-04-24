const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, "postgres", "korra", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false,
});

module.exports = sequelize;
