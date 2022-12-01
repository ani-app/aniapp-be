import sequelize from '../database/connection';
import {DataTypes, Model} from 'sequelize';

class Breed extends Model {}

Breed.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize,  modelName: 'Breed', freezeTableName: true});


export default Breed;