module.exports.getAllPetsSchema = `SELECT *
FROM Pets
NATURAL JOIN Breeds
`;