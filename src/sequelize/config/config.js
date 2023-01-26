require("dotenv").config();

module.exports = {
  development: {
    url: process.env.REMOTE_DB_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};
