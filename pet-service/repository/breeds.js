import { where } from 'sequelize';
import Breed from '../models/breed';
import BreedType from '../models/breedType';
import Pet from '../models/pet';

const repository = {
    GetAllBreeds : async () => {
        return await Breed.findAll({include : BreedType});
    },

    GetBreed : async (id) => {
        return await Breed.findByPk(id, {
            include: [BreedType, Pet]
        })
    },

    GetBreedWithoutInclude : async (id) => {
        return await Breed.findByPk(id);
    },

    CreateBreed : async (breed) => {
        return await Breed.create(breed);
    },

    DeleteBreed : async (id) => {
        return await Breed.destroy({where : {id: id}});
    },

    UpdateBreed : async (breed) => {
        let updatedBreedRows = await Breed.update(breed, {
            where : {
                id: breed.id
            },
            returning: true
        });
        return updatedBreedRows[1][0];
    }

}

export default repository;