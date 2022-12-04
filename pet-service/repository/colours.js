import Colour from '../models/colour';

const repository = {
    GetAll : async () => {
        return await Colour.findAll();
    },

    Get : async (id) => {
        return await Colour.findByPk(id, {
            include: Pet
        })
    },

    GetWithoutInclude : async (id) => {
        return await Colour.findByPk(id);
    },

    Create : async (colour) => {
        return await Colour.create(colour);
    },

    Delete : async (id) => {
        return await Colour.destroy({where : {id: id}});
    },

    Update : async (colour) => {
        let updatedColourRows = await Colour.update(colour, {
            where : {
                id: colour.id
            },
            returning: true
        });
        return updatedColourRows[1][0];
    }

}

export default repository;