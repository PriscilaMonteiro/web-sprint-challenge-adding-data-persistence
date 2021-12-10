const express = require('express');
const db = require('../../data/dbConfig');
const router = express.Router();

const {
  handleError,
} = require ('./middleware');

const Resources = require('./model');


router.use(handleError)

module.exports = router;
