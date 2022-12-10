import Breed from "./breed";
import BreedType from "./breedType";
import Colour from "./colour";
import Gender from "./gender";
import Pet from "./pet";

export default function createModelsAndRelations() {
    BreedType.hasMany(Breed, {foreignKey: 'breedTypeId'});
    Breed.belongsTo(BreedType, {foreignKey: 'breedTypeId'});
    Breed.hasMany(Pet, {foreignKey: 'breedId'});
    Pet.belongsTo(Breed, {foreignKey: 'breedId'});
    Colour.hasMany(Pet, {foreignKey: 'colourId'});
    Pet.belongsTo(Colour, {foreignKey: 'colourId'});
    Gender.hasMany(Pet, {foreignKey: 'genderId'});
    Pet.belongsTo(Gender, {foreignKey: 'genderId'});
}