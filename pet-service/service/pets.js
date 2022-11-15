const repository = require('../repository/pets');
const petModel = require('../models/pet');

module.exports.GetAllPets = async (limit, customer_id) => {
  if (limit > 20) {
    limit = 20;
  }
  try {
    var pets;
    if (customer_id != null) {
      pets = await repository.GetCustomersPets(limit, customer_id);
    }else {
      pets = await repository.GetAllPets(limit);
    }
    return pets;
  }catch(err) {
    throw err;
  }
};

module.exports.GetPet = async (id) => {
  try {
    let pet = await repository.GetPet(id);
    return pet;
  }catch(err) {
    throw err;
  }
};

module.exports.CreatePet = async (pet) => {
  try {
    let validate = petModel.validation(pet)
    if (validate.error) {
      throw new Error(validate.message);
    }
    let petRes = await repository.CreatePet(pet);
    return petRes
  } catch (err) {
    throw err;
  }
};