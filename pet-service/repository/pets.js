const pool = require('../database/pool'); 
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
  return petModel.rowToDTO(response.rows[0]);;
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