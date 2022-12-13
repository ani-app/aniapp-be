const httpProxy = require('express-http-proxy');
const config = require('./config');
const {Router} = require('express');
const router = Router();

function GetURI(addr, port) {
    return `http://${addr}:${port}`
}

const helloworldServiceProxy = httpProxy(GetURI(config.helloWorldService.addr, config.helloWorldService.port));
const petServiceProxy = httpProxy(GetURI(config.petService.addr, config.petService.port));

router.use('/pets', (req, res, next) => {
    req.url = '/v1/pets' + req.url;
    console.log(req.url);
    petServiceProxy(req, res, next)
});
router.use('/breeds', (req, res, next) => petServiceProxy(req, res, next));
router.use('/breed-types', (req, res, next) => petServiceProxy(req, res, next));
router.use('/genders', (req, res, next) => petServiceProxy(req, res, next));
router.use('/colours', (req, res, next) => petServiceProxy(req, res, next));
router.use('/', (req, res, next) => res.status(200).send({message: 'the v1 is running'}));

module.exports = router;