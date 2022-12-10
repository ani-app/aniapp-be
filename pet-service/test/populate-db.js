import Pet from "../src/models/pet";
import Breed from "../src/models/breed";
import BreedType from "../src/models/breedType";
import Gender from "../src/models/gender";
import Colour from "../src/models/colour";

async function populateDb() {
    await BreedType.bulkCreate([{name: 'Kedi'}, {name: 'Köpek'}, {name: 'Kuş'}]);
    await Breed.bulkCreate([
        {name:'tekir', breedTypeId:1},
        {name: 'scottish', breedTypeId:1},
        {name: 'kangal', breedTypeId:2},
        {name: 'pug', breedTypeId:2},
        {name: 'papağan', breedTypeId:3}
    ]);
    await Gender.bulkCreate([
        {name: 'dişi'},
        {name: 'erkek'}
    ]);
    await Colour.bulkCreate([
        {name: 'siyah', code: '000000'},
        {name: 'beyaz', code: 'ffffff'},
    ]);
    await Pet.bulkCreate([
        {name: 'Karabaş', breedId: 3, genderId: 2, colourId: 2, idNumber: 123123, customerId: 123},
        {name: 'Zeytin', breedId: 1, genderId: 1, colourId: 1, idNumber: 545454, customerId: 545},
    ]);

}

export default populateDb;