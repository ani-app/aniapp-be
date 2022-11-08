const sequelize = require('../database/connection');
const Datatypes = require('sequelize').DataTypes;
const Model = require('sequelize').Model;

class Pet extends Model {};

Pet.init({
    id : {
        type : Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false
    }
});