const express = require('express');
const db = require('../../data/dbConfig');
const router = express.Router();

const {
  handleError,
  checkProjectId,
} = require ('./middleware');

const Projects = require('./model');

router.get('/', (req, res, next) => {
  Projects.getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
})

router.get('/:id', checkProjectId, (req, res, next) => {
  res.status(200).json(req.project);
})


router.use(handleError)

module.exports = router;


