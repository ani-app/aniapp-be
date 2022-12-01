const {DataTypes, Model} = require('sequelize');
const sequlize = require('../database/sequlize');
const validation = require('./validation')

class Pet extends Model {}

Pet.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  customerID: {
    type: DataTypes.INTEGER
  }
})

module.exports.validation = (pet, isNew) => {
  if (!pet.customer_id && isNew) return validation.errorResponse("must be a customer_id field");  
  if (!pet.name && isNew) return validation.errorResponse("must be a name field");  
  if (pet.name.length <= 2) return validation.errorResponse("pet name must be more than 2 characters");
  if (!pet.gender && isNew) return validation.errorResponse("must be a gender field");  

  return validation.successResponse;
}