const express = require('express');

const Projects = require('../data/helpers/projectModel');
const router = express.Router();
router.use(express.json());

// TEST
// router.get('/', (req, res) => {
//   res.send(`<h2>hello from projects!</h2>`);
// });

// GET projects
router.get('/', (req, res) => {
  Projects.get(req.all)
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The projects information could not be retrieved." });
  });
});

// GET projects/:id
router.get('/:id', (req, res) => {
  Projects.get(req.params.id)
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The projects information could not be retrieved." });
  });
});

// CREATE projects
router.post('/', (req, res) => {
  Projects.insert(req.body)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The projects information could not be retrieved." });
  });
});

// UPDATE projects
router.put('/:id', (req, res) => {
  Projects.update(req.params.id, req.body)
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The projects information could not be retrieved." });
  });
});

// DELETE projects
router.delete('/:id', (req, res) => {
  Projects.remove(req.params.id)
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The projects information could not be retrieved." });
  });
});

module.exports = router;
