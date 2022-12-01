import sequelize from '../database/connection';
import {DataTypes, Model} from 'sequelize';

class Gender extends Model {};

Gender.init({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize, modelName:'Gender'});


export default Gender;