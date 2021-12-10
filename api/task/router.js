const express = require('express');
const router = express.Router();

const {
  handleError,
  checkTaskId,
  checkTaskPayload,
} = require ('./middleware');

const Tasks = require('./model');

router.get('/', (req, res, next) => {
  Tasks.getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
})

router.get('/:id', checkTaskId, (req, res, next) => {
  res.status(200).json(req.task);
})

router.post('/', checkTaskPayload, (req, res, next) => { 
  Tasks.createTask(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.use(handleError)

module.exports = router;
