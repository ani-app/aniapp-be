import petRepo from '../repository/pets';

const service = {
  GetAll : async (limit, customer_id) => {
    if (limit > 20) {
      limit = 20;
    }
    var pets;
    if (customer_id != null) {
      pets = await petRepo.GetWithCustomer(limit, customer_id);
    }else {
      pets = await petRepo.GetAll(limit);
    }
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
  
    let currentPet = await petRepo.GetWithoutInclude(pet.id);
    if (pet.customerId == undefined) pet.customerId = currentPet.customerId;
    if (pet.name == undefined) pet.name = currentPet.name;
    if (pet.birthDate == undefined) pet.birthDate = currentPet.birthDate;
    if (pet.photo == undefined) pet.photo = currentPet.photo;
    if (pet.colourCode == undefined) pet.colourCode = currentPet.colourCode;
    if (pet.idNumber == undefined) pet.idNumber = currentPet.idNumber;
    
    return await petRepo.Update(pet);  
  }
  
}

export default service;