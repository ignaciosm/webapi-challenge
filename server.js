const express = require('express');
const server = express();
server.use(express.json());

// ROUTERS
const projectRouter = require('./Routers/projectRouter');
const actionRouter = require('./Routers/actionRouter');

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// ROUTES
server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

module.exports = server;

// const express = require('express');

// const postsRouter = require('../posts/posts-router');

// const server = express();

// server.use(express.json());

// server.get('/', (req, res) => {
//   res.send(`
//     <h2>Lambda Posts API</h>
//     <p>Welcome to the Lambda Posts API</p>
//   `);
// });

// server.use('/api/posts', postsRouter);

// module.exports = server;