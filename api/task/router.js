const express = require('express');
const db = require('../../data/dbConfig');
const router = express.Router();

const {
  handleError,
} = require ('./middleware');

const Tasks = require('./model');

router.get('/', (req, res, next) => {
  Tasks.getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
})

router.use(handleError)

module.exports = router;
