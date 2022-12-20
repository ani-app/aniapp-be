import sequelize from '../database/connection';
import {DataTypes, Model} from 'sequelize';

class CustomerProfile extends Model {}

CustomerProfile.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }, 
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photoURL: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'CustomerProfile',
})

export default CustomerProfile;