import Breed from '../models/breed';
import BreedType from '../models/breedType';
import Colour from '../models/colour';
import Gender from '../models/gender';
import Pet from '../models/pet';

const repository = {
  
  GetAll : async (limit, filters) => {
    let whereCondition = {}
    if (filters.genderId !== null && filters.genderId !== undefined) whereCondition.genderId = filters.genderId;
    if (filters.colourId !== null && filters.colourId !== undefined) whereCondition.colourId = filters.colourId;
    if (filters.customerId !== null && filters.customerId !== undefined) whereCondition.customerId = filters.customerId;
    if (filters.breedId !== null && filters.breedId !== undefined) whereCondition.breedId = filters.breedId;
    console.log(whereCondition);
    return await Pet.findAll({
      limit, 
      include: [
        {
          model : Breed,
          include : BreedType,
        },
        {
          model: Colour
        },
        {
          model: Gender
        }
      ],
      where : whereCondition
    });;
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