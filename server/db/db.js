//exports the Sequelize constructor
const Sequelize = require("sequelize");

const config = {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

if (process.env.LOGGING) {
  delete config.logging;
}

//create an instance of sequelize
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/users",
  config
);

module.exports = db;
