import config from '../config/config';
import Sequelize from 'sequelize';

const connStr = 'postgres://' + 
    config.database.user + ':' + config.database.password + '@' +
    config.database.host + ':' + config.database.port + '/' + config.database.name;

console.log(connStr);

const sequelize = new Sequelize(connStr, {
    pool: {
        max : 5,
        min : 0,
        acquire: 30000, 
        idle: 10000,
    },
    define : {
        freezeTableName: true,
        timestamps: false
    }
});

export default sequelize;