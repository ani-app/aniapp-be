import petRepo from '../repository/pets';
import Pet from '../models/pet';

const service = {
  GetAllPets : async (limit, customer_id) => {
    if (limit > 20) {
      limit = 20;
    }
    var pets;
    if (customer_id != null) {
      pets = await petRepo.GetCustomersPets(limit, customer_id);
    }else {
      pets = await petRepo.GetAllPets(limit);
    }
    return pets;
  },

  GetPet : async (id) => {
    return await petRepo.GetPet(id);
  },

  CreatePet: async (pet) => {
    let validate = Pet.CreateValidation(pet);
    if (validate.error) {
      throw validate.message;
    }
    return petRepo.CreatePet(pet);
  },

  DeletePet : async (id) => {
    return await petRepo.DeletePet(id);
  },

  UpdatePet : async (pet) => {
    let validate = Pet.UpdateValidation(pet);
    if (validate.error) {
      throw validate.message;
    }
  
    let currentPet = await petRepo.GetPet(pet.id);
    if (pet.customerId == undefined) pet.customer_id = currentPet.customerId;
    if (pet.name == undefined) pet.name = currentPet.name;
    if (pet.birthDate == undefined) pet.birthDate = currentPet.birthDate;
    if (pet.photo == undefined) pet.photo = currentPet.photo;
    if (pet.colourCode == undefined) pet.colourCode = currentPet.colourCode;
    if (pet.idNumber == undefined) pet.idNumber = currentPet.idNumber;
    
    return await petRepo.UpdatePet(pet);  
  }
  
}

export default service;