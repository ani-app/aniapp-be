import coloursRepo from '../repository/colours';
import { CreateValidate, UpdateValidate } from '../validation/colour';

const service = {
    GetAll : async () => {
        return await coloursRepo.GetAll();
    },

    Get : async (id) => {
        return await coloursRepo.Get(id);
    },

    Create : async (colour) => {
        CreateValidate(colour);
        return await coloursRepo.Create(colour);
    },

    Delete : async (id) => {
        return await coloursRepo.Delete(id);
    },

    Update : async (colour) => {
        UpdateValidate(colour);
        let coloursRepo = await coloursRepo.GetWithoutInclude(colour.id);
        if (colour.name == undefined) colour.name = colour.name;
        if (colour.code == undefined) colour.code = colour.code;
    
        return await breedTypeRepo.Update(colour);  
    }

}

export default service;