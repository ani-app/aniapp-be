const validation = require('./validation')

module.exports.rowToDTO = (r) => {
    return {
        id : r.id,
        customer : r.customer_id,
        name : r.name,
        created_at : r.created_at,
        birth_date : r.birth_date,
        photo : r.photo,
        colour_code : r.colour_code,
        id_number : r.id_number,
        gender : r.gender,
        breed : {
          id : r.breed_id,
          name : r.breed_name,
          type : {
            id : r.breed_type_id,
            name : r.breed_type_name
          }
        }
      }
};

module.exports.validation = (pet) => {
  
  if (!pet.customer_id) return validation.errorResponse("must be a customer_id field");  
  if (!pet.name) return validation.errorResponse("must be a name field");  
  if (pet.name.length <= 2) return validation.errorResponse("pet name must be more than 2 characters");
  if (!pet.gender) return validation.errorResponse("must be a gender field");  

  return validation.successResponse;
}