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

    Update : async (breedType) => {
        
        if (breedType.name == undefined) {
            let currentbreedType = await breedTypeRepo.GetWithoutInclude(breed.id);
            if (currentbreedType != breedType.name) {
                return await breedTypeRepo.Update(breedType);
            }
        }
        
        throw new Error('nothing changed on breed type');
    
    }

}

export default service;