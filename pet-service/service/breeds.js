import breedRepo from '../repository/breeds';

const service = {
    GetAllBreeds : async () => {
        return await breedRepo.GetAllBreeds();
    }
}

export default service;