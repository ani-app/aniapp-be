import { where } from 'sequelize';
import BreedType from '../models/breedType';
import Breed from '../models/breed';

const repository = {
    GetAllBreeds : async () => {
        return await BreedType.findAll();
    },

    GetBreed : async (id) => {
        return await BreedType.findByPk(id, {
            include: Breed
        })
    },

    GetBreedWithoutInclude : async (id) => {
        return await BreedType.findByPk(id);
    },

    CreateBreed : async (breedType) => {
        return await BreedType.create(breedType);
    },

    DeleteBreed : async (id) => {
        return await BreedType.destroy({where : {id: id}});
    },

    UpdateBreed : async (breedType) => {
        let updatedBreedRows = await Breed.update(breedType, {
            where : {
                id: breedType.id
            },
            returning: true
        });
        return updatedBreedRows[1][0];
    }

}

export default repository;