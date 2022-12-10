import sequelize from '../database/connection';
import {DataTypes, Model} from 'sequelize';

class Colour extends Model {};

Colour.init({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        len : {
            args : [6,6],
            msg : 'pets colour code must be 6 length'
        }
    }
}, {sequelize, modelName:'Colour'});


export default Colour;