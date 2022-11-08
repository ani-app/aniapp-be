const repository = require('../repository/pets');

module.exports.GetAllPets = async (limit) => {
  if (limit > 20) {
    limit = 20;
  }
  try {
    pets = await repository.GetAllPets(limit);
    return pets;
  }catch(err) {
    return err;
  }
};