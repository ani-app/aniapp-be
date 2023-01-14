import Breed from "./breed";
import BreedType from "./breedType";
import Colour from "./colour";
import Gender from "./gender";
import Pet from "./pet";

export default function createModelsAndRelations() {
    BreedType.hasMany(Breed, {foreignKey: {name: 'breedTypeId', allowNull: false}});
    Breed.belongsTo(BreedType, {foreignKey: {name: 'breedTypeId', allowNull: false}});
    Breed.hasMany(Pet, {foreignKey: {name: 'breedId', allowNull: false}});
    Pet.belongsTo(Breed, {foreignKey: {name: 'breedId', allowNull: false}});
    Colour.hasMany(Pet, {foreignKey: {name: 'colourId', allowNull: false}});
    Pet.belongsTo(Colour, {foreignKey: {name: 'colourId', allowNull: false}});
    Gender.hasMany(Pet, {foreignKey: {name: 'genderId', allowNull: false}});
    Pet.belongsTo(Gender, {foreignKey: {name: 'genderId', allowNull: false}});
}