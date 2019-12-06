const express = require('express');
const server = express();
server.use(express.json());

// ROUTERS
const projectRouter = require('./Routers/projectRouter');
const actionRouter = require('./Routers/actionRouter');

server.get('/', (req, res) => {
  res.send(`<h2>Works!</h2>`);
});

// ROUTES
server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

module.exports = server;