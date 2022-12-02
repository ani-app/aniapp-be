import sequelize from '../database/connection';
import val from './validation';
import {DataTypes, Model} from 'sequelize';
import Validation from './validation';
import ValidatableModel from './validation';

class Pet extends Model {
  /*
  static CreateValidation(data) { 
    if (!data.customerId) return this.errorResponse("must be a customer_id field");  
    if (!data.name) return this.errorResponse("must be a name field");  
    if (data.name.length <= 2) return this.errorResponse("pet name must be more than 2 characters");
    if (!data.genderId) return this.errorResponse("must be a gender field");  
    return this.successResponse;
  }

  static UpdateValidation(data) {
    if (data.name.length <= 2) return this.errorResponse("pet name must be more than 2 characters");  
    return this.successResponse;
  }*/

}

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