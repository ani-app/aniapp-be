import breedTypeRepo from '../repository/breedTypes';

const service = {
    GetAll : async () => {
        return await breedTypeRepo.GetAll();
    },

    Get : async (id) => {
        return await breedTypeRepo.Get(id);
    },

    Create : async (breed) => {
        return await breedTypeRepo.Create(breed);
    },

    Delete : async (id) => {
        return await breedTypeRepo.Delete(id);
    },

    Update : async (breed) => {
        let currentBreed = await breedTypeRepo.GetWithoutInclude(pet.id);
        if (breed.name == undefined) breed.name = currentBreed.name;
        if (breed.breedTypeId == undefined) breed.breedTypeId = currentBreed.breedTypeId;
    
        return await breedTypeRepo.Update(breed);  
    }

}

export default service;