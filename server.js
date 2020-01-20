const express = require('express');

//const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
const router = require('./data/router')
server.get('/', (req, res) => {
    res.send(`<h2>Server Running!</h2>`);
  });
server.use('/api/accounts',router)

module.exports = server;