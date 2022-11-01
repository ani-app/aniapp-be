var database = require('../database/connect');
var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({message: "pet service"});
});

router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    database.query('SELECT * FROM Pets WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
})

module.exports = router;
