import gendersRepo from '../repository/genders';

const service = {
    GetAll : async () => {
        return await gendersRepo.GetAll();
    },

    Get : async (id) => {
        return await gendersRepo.Get(id);
    },

    Create : async (gender) => {
        return await gendersRepo.Create(gender);
    },

    Delete : async (id) => {
        return await gendersRepo.Delete(id);
    },

    Update : async (gender) => {
        let currentGender = await gendersRepo.GetWithoutInclude(colour.id);
        if (gender.name == undefined) gender.name = currentGender.name;
        return await gendersRepo.Update(colour);  
    }

}

export default service;