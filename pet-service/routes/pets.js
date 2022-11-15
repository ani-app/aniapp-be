var express = require('express');
const { response } = require('../app');
var router = express.Router();
const service = require('../service/pets');

/* GET users listing. */
router.get('/', async function(req, res) {
    try {
        pets = await service.GetAllPets(req.query.limit, req.query.customer_id);
        res.status(200).json(pets);
    }catch (err) {
        res.status(400).json({'error' : err});
    }
});

router.get('/:id', async function(req, res) {
    try {
        pet = await service.GetPet(req.params.id);
        res.status(200).json(pet);
    }catch (err) {
        res.status(400).json({'error' : err});
    }
});

router.post('/', async function(req, res){
    try {
        let pet = await service.CreatePet(req.body);
        res.status(201).json(pet);
    } catch(err) {
        res.status(400).json({'error' : err.message});
    }    
});

module.exports = router;
