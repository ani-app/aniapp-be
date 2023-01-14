import breedTypeRepo from '../repository/breedTypes';
import { CreateValidate, UpdateValidate } from '../validation/breedType';

const service = {
    GetAll : async () => {
        return await breedTypeRepo.GetAll();
    },

    Get : async (id) => {
        return await breedTypeRepo.Get(id);
    },

    Create : async (breedType) => {
        CreateValidate(breedType);
        return await breedTypeRepo.Create(breedType);
    },

    Delete : async (id) => {
        return await breedTypeRepo.Delete(id);
    },

    Update : async (breedType) => {
        UpdateValidate(breedType);
        if (breedType.name == undefined) {
            let currentbreedType = await breedTypeRepo.GetWithoutInclude(breedType.id);
            if (currentbreedType != breedType.name) {
                return await breedTypeRepo.Update(breedType);
            }
        }
        
        throw new Error('nothing changed on breed type');
    
    }

}

export default service;