const Sequelize = require('sequelize');
const dbConfig = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        dialect: process.env.POSTGRES_DIALECT
    }
);

module.exports = dbConfig;
