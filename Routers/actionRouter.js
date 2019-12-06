const express = require('express');

const Actions = require('../data/helpers/actionModel');
const router = express.Router();
router.use(express.json());

// GET actions
router.get('/', (req, res) => {
  Actions.get(req.all)
  .then(actions => {
    res.status(200).json(actions);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The actions information could not be retrieved." });
  });
});

// GET actions/:id
router.get('/:id', (req, res) => {
  Actions.get(req.params.id)
  .then(actions => {
    res.status(200).json(actions);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The actions information could not be retrieved." });
  });
});

// POST actions
router.post('/', (req, res) => {
  Actions.insert(req.body)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The actions information could not be retrieved." });
  });
});

// UPDATE actions
router.put('/:id', (req, res) => {
  Actions.update(req.params.id, req.body)
  .then(actions => {
    res.status(200).json(actions);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The actions information could not be retrieved." });
  });
});

// DELETE actions
router.delete('/:id', (req, res) => {
  Actions.remove(req.params.id)
  .then(actions => {
    res.status(200).json(actions);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The actions information could not be retrieved." });
  });
});

module.exports = router;
