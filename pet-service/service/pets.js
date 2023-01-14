import petRepo from '../repository/pets';
import {CreateValidate, UpdateValidate} from '../validation/pet';
import genderRepo from '../repository/genders';
import colourRepo from '../repository/colours';

const service = {
  GetAll : async (limit, filters) => {
    if (limit > 20) {
      limit = 20;
    }
    var pets = await petRepo.GetAll(limit, filters);
    return pets;
  },

  Get : async (id) => {
    return await petRepo.Get(id);
  },

  Create: async (pet) => {
    /*let validate = Pet.CreateValidation(pet);
    if (validate.error) {
      throw validate.message;
    }*/
    CreateValidate(pet);
    return await petRepo.Create(pet);
  },

  Delete : async (id) => {
    return await petRepo.Delete(id);
  },

  Update : async (pet) => {
    /*let validate = Pet.UpdateValidation(pet);
    if (validate.error) {
      throw validate.message;
    }*/
    
    UpdateValidate(pet);
    let currentPet = await petRepo.GetWithoutInclude(pet.id);

    // The customer of the pet cannot change
    pet.customerId = currentPet.customerId;

    if (pet.name == undefined) pet.name = currentPet.name;
    if (pet.birthDate == undefined) pet.birthDate = currentPet.birthDate;
    if (pet.photo == undefined) pet.photo = currentPet.photo;
    if (pet.colourCode == undefined) pet.colourCode = currentPet.colourCode;
    if (pet.idNumber == undefined) pet.idNumber = currentPet.idNumber;
    
    return await petRepo.Update(pet);  
  }
  
}

export default service;