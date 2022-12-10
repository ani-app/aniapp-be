import { where } from 'sequelize';
import Breed from '../models/breed';
import BreedType from '../models/breedType';
import Pet from '../models/pet';

const repository = {
    GetAll : async () => {
        return await Breed.findAll({include : BreedType});
    },

    Get : async (id) => {
        return await Breed.findByPk(id, {
            include: [BreedType, Pet]
        })
    },

    GetWithoutInclude : async (id) => {
        return await Breed.findByPk(id);
    },

    Create : async (breed) => {
        return await Breed.create(breed);
    },

    Delete : async (id) => {
        return await Breed.destroy({where : {id: id}});
    },

    Update : async (breed) => {
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