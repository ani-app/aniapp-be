var express = require('express');
const { response } = require('../app');
var router = express.Router();
const service = require('../service/pets');

/* GET users listing. */
router.get('/', async function(req, res) {
    try {
        pets = await service.GetAllPets(10);
        res.status(200).json(pets);
    }catch (err) {
        res.status(400).json({'error' : err})
    }
});

module.exports = router;
