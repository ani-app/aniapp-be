const pool = require('../database/pool'); 
const schemas = require('./schemas.js');
const petModel = require('../models/pet');

module.exports.GetAllPets = async (limit) => {
  var pets = [];
  try {
    let response = await pool.query(schemas.getAllPetsSchema, [limit]);
    response.rows.forEach(r => pets.push(petModel.rowToDTO(r)));
    return pets;
  } catch (err) {
    return err;
  }
};

module.exports.GetCustomersPets = async (limit, customer_id) => {
  var pets = [];
  try {
    let response = await pool.query(schemas.getCustomersPetsSchema, [customer_id, limit]);
    response.rows.forEach(r => pets.push(petModel.rowToDTO(r)));
    return pets;
  } catch (err) {
    return err;
  }
};

module.exports.GetPet = async (id) => {
  var pet;
  try {
    let response = await pool.query(schemas.getPetSchema, [id]);
    pet = petModel.rowToDTO(response.rows[0]);
    return pet;
  } catch (err) {
    return err;
  }
};