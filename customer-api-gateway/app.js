const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();

const helloworldServiceAddr = process.env.HELLOWORLD_SERVICE_ADDR;
const helloworldServicePort = process.env.HELLOWORLD_SERVICE_PORT;

function GetURI(addr, port) {
  return `http://${addr}:${port}`
}

const helloworldServiceProxy = httpProxy(GetURI(helloworldServiceAddr, helloworldServicePort)); 

app.get('/hello-world', (req, res, next) => {
  helloworldServiceProxy(req, res, next);
});

app.get('/', (req, res, next) => {
  res.status(200).send({message:"customer api gateway"});
})

module.exports = app;

