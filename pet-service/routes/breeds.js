var express = require('express');
var router = express.Router();
const service = require('../service/breeds');

router.get('/', async function(req, res) {
    try {
        breeds = await service.GetAllBreeds();
        res.status(200).json(breeds);
    }catch (err) {
        console.log(err);
        res.status(400).json({'error' : err});
    }
});

module.exports = router;

