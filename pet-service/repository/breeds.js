import Breed from '../models/breed';

const repository = {
    GetAllBreeds : async () => {
        return await Breed.findAll();
    }
}

export default repository;