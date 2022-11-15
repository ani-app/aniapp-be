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
  if (pet.name.length <= 2) {
    return {error : true, message : "pet name must be more than 2 characters"};
  }
  return {error : false, message : ""};
}