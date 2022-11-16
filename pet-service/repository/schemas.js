module.exports.getAllPetsSchema = `SELECT
    p.*, b.name breed_name, b.breed_type_id breed_type_id, bt.name breed_type_name
    FROM Pets p
    INNER JOIN Breeds b ON b.id = p.breed_id
    INNER JOIN BreedTypes bt ON bt.id = b.breed_type_id
    ORDER BY id
    LIMIT $1;
`;

module.exports.getPetSchema = `SELECT
    p.id, customer_id, p.name, created_at, birth_date, photo,
    colour_code, id_number, gender, p.breed_id, b.name breed_name, b.breed_type_id breed_type_id, bt.name breed_type_name
    FROM Pets p
    INNER JOIN Breeds b ON b.id = p.breed_id
    INNER JOIN BreedTypes bt ON bt.id = b.breed_type_id
    WHERE p.id = $1;
`

module.exports.getCustomersPetsSchema = `SELECT
    p.*, b.name breed_name, b.breed_type_id breed_type_id, bt.name breed_type_name
    FROM Pets p
    INNER JOIN Breeds b ON b.id = p.breed_id
    INNER JOIN BreedTypes bt ON bt.id = b.breed_type_id
    WHERE p.customer_id = $1
    ORDER BY id
    LIMIT $2;
`

module.exports.createPetSchema = `WITH Pets as (
    INSERT INTO Pets (customer_id, name, breed_id, colour_code, gender) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *
    ) SELECT p.*, b.name breed_name, b.breed_type_id breed_type_id, bt.name breed_type_name 
    FROM Pets p
    INNER JOIN Breeds b ON b.id = p.breed_id
    INNER JOIN BreedTypes bt ON bt.id = b.breed_type_id;
`

module.exports.deletePetSchema = `DELETE FROM Pets WHERE id = $1 RETURNING id`