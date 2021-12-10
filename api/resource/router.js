const express = require('express');
const db = require('../../data/dbConfig');
const router = express.Router();

const {
  handleError,
} = require ('./middleware');

const Resources = require('./model');

router.get('/', (req, res, next) => {
  Resources.getAll()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
})




router.use(handleError)

module.exports = router;
