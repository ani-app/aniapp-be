import Breed from '../models/breed';
import BreedType from '../models/breedType';
import Colour from '../models/colour';
import Gender from '../models/gender';
import Pet from '../models/pet';

export default async function initDbData() {
    await BreedType.bulkCreate([
        {name: 'kedi'},
        {name: 'köpek'},
        {name: 'Tavşan'},
    ]);

    await Breed.bulkCreate([
        {name: 'tekir', breedTypeId: 1},
        {name: 'siyam', breedTypeId: 1},
        {name: 'pug', breedTypeId: 2},
        {name: 'kangal', breedTypeId: 2},
        {name: 'cüce tavşan', breedTypeId: 3},
    ]);

    await Gender.bulkCreate([
        {name: 'erkek'},
        {name: 'dişi'},
    ]);
    
    await Colour.bulkCreate([
        {name: 'beyaz', code: 'ffffff'},
        {name: 'siyah', code: '000000'},
    ]);

    await Pet.bulkCreate([
        {name: 'prenses', customerId: 1, breedId: 1, genderId: 2, colourId: 1},
    ]);
}
