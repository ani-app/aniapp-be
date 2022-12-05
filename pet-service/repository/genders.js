import Gender from '../models/gender';
import Pet from '../models/pet';

const repository = {
    GetAll : async () => {
        return await Gender.findAll();
    },

    Get : async (id) => {
        return await Gender.findByPk(id, {
            include: Pet
        })
    },

    GetByName : async (name) => {
        return await Gender.findOne({
            where : {
                name
            }
        })
    },

    GetWithoutInclude : async (id) => {
        return await Gender.findByPk(id);
    },

    Create : async (gender) => {
        return await Gender.create(gender);
    },

    Delete : async (id) => {
        return await Gender.destroy({where : {id: id}});
    },

    Update : async (gender) => {
        let updatedGenderRows = await Gender.update(gender, {
            where : {
                id: gender.id
            },
            returning: true
        });
        return updatedGenderRows[1][0];
    }

}

export default repository;