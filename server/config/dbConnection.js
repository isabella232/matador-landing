const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.AWS_RDS_DB_NAME, process.env.AWS_RDS_DB_USER, process.env.AWS_RDS_DB_PASS, {
    host: process.env.AWS_RDS_DB_HOST,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;