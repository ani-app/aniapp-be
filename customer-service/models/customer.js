import sequelize from '../database/connection';
import {DataTypes, Model} from 'sequelize';

class Customer extends Model {}

Customer.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  isGoogleAccount: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
        len: {
          args : [4, 16],
          msg: "minimum 4 and maximum 16 characters allowed in username"
        }
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
        isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  addressId: {
    type: DataTypes.INTEGER,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Customer',
})

export default Customer;