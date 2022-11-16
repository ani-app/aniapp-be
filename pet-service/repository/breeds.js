const pool = require('../database/pool');
const schemas = require('./schemas');
const breedModel = require('../models/breed');

module.exports.GetAllBreeds = async () => {
    var breeds = [];
    let response = await pool.query(schemas.getAllBreedsSchema);
    response.rows.forEach(r => breeds.push(breedModel.rowToDTO(r)));
    return breeds;
}