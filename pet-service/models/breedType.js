import sequelize from '../database/connection';
import {DataTypes, Model} from 'sequelize';

class BreedType extends Model {};

BreedType.init({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize, modelName:'BreedType'});


export default BreedType;