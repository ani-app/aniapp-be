import sequelize from '../database/connection';
import {DataTypes, Model} from 'sequelize';

class CustomerType extends Model {}

CustomerType.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'CustomerType',
})

export default CustomerType;