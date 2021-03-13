require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASSWORD,
    "database": process.env.DEV_DB,
    "host": process.env.DEV_DB_HOST,
    "dialect": "postgres",
    "port": process.env.DEV_PORT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.PROD_DB_USER,
    "password": process.env.PROD_DB_PASSWORD,
    "database": process.env.PROD_DB,
    "host": process.env.PROD_DB_HOST,
    "dialect": "postgres",
    "port": process.env.PROD_PORT
  }
};
