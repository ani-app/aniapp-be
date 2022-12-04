import { where } from 'sequelize';
import BreedType from '../models/breedType';
import Breed from '../models/breed';

const repository = {
    GetAll : async () => {
        return await BreedType.findAll();
    },

    Get : async (id) => {
        return await BreedType.findByPk(id, {
            include: Breed
        })
    },

    GetWithoutInclude : async (id) => {
        return await BreedType.findByPk(id);
    },

    Create : async (breedType) => {
        return await BreedType.create(breedType);
    },

    Delete : async (id) => {
        return await BreedType.destroy({where : {id: id}});
    },

    Update : async (breedType) => {
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