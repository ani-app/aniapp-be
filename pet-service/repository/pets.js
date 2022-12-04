import Breed from '../models/breed';
import BreedType from '../models/breedType';
import Pet from '../models/pet';

const repository = {
  
  GetAll : async (limit) => {
    return await Pet.findAll({limit, include: {
      model : Breed,
      include : BreedType
    }});;
  },

  GetWithCustomer : async (limit, customerId) => {
    return await Pet.findAll({where: {customerId}, limit, include: {
      model : Breed,
      include : BreedType
    }});
  },

  Get : async (id) => {
    return await Pet.findByPk(id, {include: {
      model : Breed,
      include : BreedType
    }});
  },

  GetWithoutInclude : async (id) => {
    return await Pet.findByPk(id);
  },

  Create : async (pet) => {
    return await Pet.create(pet);
  },

  Delete : async (petId) => {
    return await Pet.destroy({where: {id: petId}});
  },

  Update : async (pet) => {
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