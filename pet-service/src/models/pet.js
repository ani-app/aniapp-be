import sequelize from '../database/connection';
import {DataTypes, Model} from 'sequelize';

class Pet extends Model {}

Pet.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate : {
      notEmpty: {
        args: true,
        msg: "Pet name required"
      },
      min: {
        args: [2],
        msg: "Minimum 2 characters required in last name"
      }
    }
  },
  birthDate: {
    type: DataTypes.DATEONLY,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
  },
  idNumber: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'Pet',
})

export default Pet;