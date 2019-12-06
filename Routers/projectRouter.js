const express = require('express');

// const Projects = require('../projects/userDb');
const router = express.Router();
router.use(express.json());

// TEST
router.get('/', (req, res) => {
  res.send(`<h2>hello from projects!</h2>`);
});

// READ projects
// router.get('/', (req, res) => {
//   Projects.get(req)
//   .then(projects => {
//     res.status(200).json(projects);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The posts information could not be retrieved." });
//   });
// });

// CREATE projects
// router.post('/', validateUser, (req, res) => {
//   Projects.insert(req.body)
//   .then(user => {
//     res.status(200).json(user);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The posts information could not be retrieved." });
//   });
// });

// UPDATE projects
// router.put('/:id', validateUserId, (req, res) => {
//   Projects.update(req.params.id, req.body)
//   .then(projects => {
//     res.status(200).json(projects);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The posts information could not be retrieved." });
//   });

// });

// DELETE projects
// router.delete('/:id', validateUserId, (req, res) => {
//   Projects.remove(req.params.id)
//   .then(projects => {
//     res.status(200).json(projects);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The posts information could not be retrieved." });
//   });
// });

module.exports = router;
