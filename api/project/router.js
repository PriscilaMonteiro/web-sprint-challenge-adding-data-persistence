const express = require('express');
const db = require('../../data/dbConfig');
const router = express.Router();

const {
  handleError,
  checkProjectId,
  checkProjectPayload,
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

router.post('/', checkProjectPayload, (req, res, next) => { 
  Projects.createProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(next);
});

router.use(handleError)

module.exports = router;


