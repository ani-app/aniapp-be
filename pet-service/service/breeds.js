import breedRepo from '../repository/breeds';
import { CreateValidate, UpdateValidate } from '../validation/breed';

const service = {
    GetAll : async () => {
        return await breedRepo.GetAll();
    },

    Get : async (id) => {
        return await breedRepo.Get(id);
    },

    Create : async (breed) => {
        CreateValidate(breed);
        return await breedRepo.Create(breed);
    },

    Delete : async (id) => {
        return await breedRepo.Delete(id);
    },

    Update : async (breed) => {
        UpdateValidate(breed);
        let currentBreed = await breedRepo.GetWithoutInclude(pet.id);
        if (breed.name == undefined) breed.name = currentBreed.name;
        if (breed.breedTypeId == undefined) breed.breedTypeId = currentBreed.breedTypeId;
    
        return await breedRepo.Update(breed);  
    }

}

export default service;