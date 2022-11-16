module.exports.rowToDTO = (r) => {
    return {
        id : r.id,
        name : r.name,
        type : {
          id : r.breed_type_id,
          name : r.breed_type_name,
        }
      }
};