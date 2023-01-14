import gendersRepo from '../repository/genders';
import { CreateValidate, UpdateValidate } from '../validation/gender';

const service = {
    GetAll : async () => {
        return await gendersRepo.GetAll();
    },

    Get : async (id) => {
        return await gendersRepo.Get(id);
    },

    Create : async (gender) => {
        CreateValidate(gender);
        return await gendersRepo.Create(gender);
    },

    Delete : async (id) => {
        return await gendersRepo.Delete(id);
    },

    Update : async (gender) => {
        UpdateValidate(gender);
        let currentGender = await gendersRepo.GetWithoutInclude(colour.id);
        if (gender.name == undefined) gender.name = currentGender.name;
        return await gendersRepo.Update(colour);  
    }

}

export default service;