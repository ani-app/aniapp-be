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
  return await repository.GetPet(id);
};

module.exports.CreatePet = async (pet) => {
  let validate = petModel.validation(pet, true);
  if (validate.error) {
    throw validate.message;
  }
  return repository.CreatePet(pet);
};

module.exports.DeletePet = async (id) => {
  return await repository.DeletePet(id);
}

module.exports.UpdatePet = async (pet) => {
  let validate = petModel.validation(pet, false);
  if (validate.error) {
    throw validate.message;
  }

  let currentPet = await repository.GetPet(pet.id);
  if (pet.customer_id == undefined) pet.customer_id = currentPet.customer_id;
  if (pet.name == undefined) pet.name = currentPet.name;
  if (pet.birth_date == undefined) pet.birth_date = currentPet.birth_date;
  if (pet.photo == undefined) pet.photo = currentPet.photo;
  if (pet.colour_code == undefined) pet.colour_code = currentPet.colour_code;
  if (pet.id_number == undefined) pet.id_number = currentPet.id_number;
  
  return await repository.UpdatePet(pet);  
}