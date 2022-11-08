const repository = require('../repository/pets');

module.exports.GetAllPets = async (limit, customer_id) => {
  if (limit > 20) {
    limit = 20;
  }
  try {
    var pets;
    if (customer_id != null) {
      pets = await repository.GetCustomersPets(limit, customer_id);
    }else {
      pets = await repository.GetAllPets(limit);
    }
    return pets;
  }catch(err) {
    return err;
  }
};

module.exports.GetPet = async (id) => {
  try {
    pet = await repository.GetPet(id);
    return pet;
  }catch(err) {
    return err;
  }
};