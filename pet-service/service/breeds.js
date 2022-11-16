const repository = require('../repository/breeds');

module.exports.GetAllBreeds = async () => {
    return await repository.GetAllBreeds();
}