import Breed from '../models/breed';
import BreedType from '../models/breedType';
import Pet from '../models/pet';

const repository = {
  
  GetAllPets : async (limit) => {
    return await Pet.findAll({limit, include: {
      model : Breed,
      include : BreedType
    }});;
  },

  GetCustomersPets : async (limit, customerId) => {
    return await Pet.findAll({where: {customerId}, limit, include: {
      model : Breed,
      include : BreedType
    }});
  },

  GetPet : async (id) => {
    return await Pet.findByPk(id, {include: {
      model : Breed,
      include : BreedType
    }});
  },

  GetPetWithoutInclude : async (id) => {
    return await Pet.findByPk(id);
  },

  CreatePet : async (pet) => {
    return await Pet.create(pet);
  },

  DeletePet : async (petId) => {
    return await Pet.destroy({where: {id: petId}});
  },

  UpdatePet : async (pet) => {
    let updatedPetRows = await Pet.update(pet, {
      where : {
        id: pet.id,
      },
      returning: true,
    });
    return updatedPetRows[1][0];
  }
}

export default repository;