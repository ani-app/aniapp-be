const pool = require('../database/pool'); 
const schemas = require('./schemas.js');

module.exports.GetAllPets = async (limit) => {
  let response;
  try {
    response = await pool.query(schemas.getAllPetsSchema);
    return response.rows;
  } catch (err) {
    return err;
  }
};