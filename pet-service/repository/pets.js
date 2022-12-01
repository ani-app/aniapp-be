const pool = require('../database/sequlize'); 
const schemas = require('./schemas.js');
const petModel = require('../models/pet');

module.exports.GetAllPets = async (limit) => {
  var pets = [];
  let response = await pool.query(schemas.getAllPetsSchema, [limit]);
  response.rows.forEach(r => pets.push(petModel.rowToDTO(r)));
  return pets;
};

module.exports.GetCustomersPets = async (limit, customer_id) => {
  var pets = [];
  let response = await pool.query(schemas.getCustomersPetsSchema, [customer_id, limit]);
  response.rows.forEach(r => pets.push(petModel.rowToDTO(r)));
  return pets;
};

module.exports.GetPet = async (id) => {
  let response = await pool.query(schemas.getPetSchema, [id]);
  if (response.rows.length == 0) throw "pet not found";
  return petModel.rowToDTO(response.rows[0]);
};

module.exports.CreatePet = async (pet) => {
  let response = await pool.query(schemas.createPetSchema, [
    pet.customer_id, pet.name, 
    pet.breed.id, 
    pet.colour_code, 
    pet.gender
  ]);
  return petModel.rowToDTO(response.rows[0]);;
};

module.exports.DeletePet = async (id) => {
  await pool.query(schemas.deletePetSchema, [id]);
}

module.exports.UpdatePet = async (pet) => {
  let res = await pool.query(schemas.updatePetSchema, [pet.id, pet.customer_id, pet.name, pet.birth_date, pet.photo, pet.colour_code, pet.id_number]);
  return petModel.rowToDTO(res.rows[0]);
}