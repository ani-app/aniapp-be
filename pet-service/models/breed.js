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
    allowNull: false,
    validate : {
      notEmpty : {
        args : true,
        msg : 'Breed name required'
      }
    }
  },
}, { sequelize,  modelName: 'Breed', freezeTableName: true});


export default Breed;