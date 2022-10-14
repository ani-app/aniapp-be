import {Sequelize} from 'sequelize';
import config from '../config/config';

// ex: postgres://admin:admin@localhost:5432/helloworld
const connString = `postgres://${config.database.name}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.name}`

const sequelize = new Sequelize(connString, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true,
    timestamps: false
  }
})

modu;