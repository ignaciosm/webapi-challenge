const express = require('express');

// const Actions = require('../actions/userDb');
const router = express.Router();
router.use(express.json());

// TEST
router.get('/', (req, res) => {
  res.send(`<h2>hello from actions!</h2>`);
});

// READ actions
// router.get('/', (req, res) => {
//   Actions.get(req)
//   .then(actions => {
//     res.status(200).json(actions);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The posts information could not be retrieved." });
//   });
// });

// CREATE actions
// router.post('/', validateUser, (req, res) => {
//   Actions.insert(req.body)
//   .then(user => {
//     res.status(200).json(user);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The posts information could not be retrieved." });
//   });
// });

// UPDATE actions
// router.put('/:id', validateUserId, (req, res) => {
//   Actions.update(req.params.id, req.body)
//   .then(actions => {
//     res.status(200).json(actions);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The posts information could not be retrieved." });
//   });

// });

// DELETE actions
// router.delete('/:id', validateUserId, (req, res) => {
//   Actions.remove(req.params.id)
//   .then(actions => {
//     res.status(200).json(actions);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ error: "The posts information could not be retrieved." });
//   });
// });

module.exports = router;
