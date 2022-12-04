import breedTypeRepo from '../repository/breedTypes';

const service = {
    GetAllBreeds : async () => {
        return await breedTypeRepo.GetAllBreeds();
    },

    GetBreed : async (id) => {
        return await breedTypeRepo.GetBreed(id);
    },

    CreateBreed : async (breed) => {
        return await breedTypeRepo.CreateBreed(breed);
    },

    DeleteBreed : async (id) => {
        return await breedTypeRepo.DeleteBreed(id);
    },

    UpdateBreed : async (breed) => {
        let currentBreed = await breedTypeRepo.GetBreedWithoutInclude(pet.id);
        if (breed.name == undefined) breed.name = currentBreed.name;
        if (breed.breedTypeId == undefined) breed.breedTypeId = currentBreed.breedTypeId;
    
        return await breedTypeRepo.UpdateBreed(breed);  
    }

}

export default service;