const { Sequelize } = require('sequelize');
const Pool = require('pg').Pool;
const config = require('../config/config');
const pool = new Pool({
    user : config.database.user,
    host : config.database.host,
    database : config.database.name,
    password : config.database.password,
    port : config.database.port
});

module.exports = pool;