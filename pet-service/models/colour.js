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
        allowNull: false
    }
}, {sequelize, modelName:'Colour'});


export default Colour;