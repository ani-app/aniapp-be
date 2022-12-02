import breedRepo from '../repository/breeds';

const service = {
    GetAllBreeds : async () => {
        return await breedRepo.GetAllBreeds();
    },

    GetBreed : async (id) => {
        return await breedRepo.GetBreed(id);
    },

    CreateBreed : async (breed) => {
        return await breedRepo.CreateBreed(breed);
    },

    DeleteBreed : async (id) => {
        return await breedRepo.DeleteBreed(id);
    },

    UpdateBreed : async (breed) => {
        let currentBreed = await breedRepo.GetBreedWithoutInclude(pet.id);
        if (breed.name == undefined) breed.name = currentBreed.name;
        if (breed.breedTypeId == undefined) breed.breedTypeId = currentBreed.breedTypeId;
    
        return await breedRepo.UpdateBreed(breed);  
    }

}

export default service;