const express = require('express');
const httpProxy = require('express-http-proxy');
const config = require('./config');
const app = express();

function GetURI(addr, port) {
    return `http://${addr}:${port}`
}

const helloworldServiceProxy = httpProxy(GetURI(config.helloWorldService.addr, config.helloWorldService.port));
const petServiceProxy = httpProxy(GetURI(config.petService.addr, config.petService.port));

app.use('/hello-world', (req, res, next) => {
    helloworldServiceProxy(req, res, next);
});

app.use('/pets', (req, res, next) => {
    console.log(req.url);
    petServiceProxy(req, res, next);
});

app.get('/', (req, res, next) => {
    res.status(200).send({message:"customer api gateway"});
});

module.exports = app;

