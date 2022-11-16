const repository = require('../repository/pets');
const petModel = require('../models/pet');

module.exports.GetAllPets = async (limit, customer_id) => {
  if (limit > 20) {
    limit = 20;
  }
  var pets;
  if (customer_id != null) {
    pets = await repository.GetCustomersPets(limit, customer_id);
  }else {
    pets = await repository.GetAllPets(limit);
  }
  return pets;
};

module.exports.GetPet = async (id) => {
  return await repository.GetPet(id);;
};

module.exports.CreatePet = async (pet) => {
  let validate = petModel.validation(pet)
  if (validate.error) {
    throw validate.message;
  }
  return repository.CreatePet(pet);
};

module.exports.DeletePet = async (id) => {
    return await repository.DeletePet(id);
}