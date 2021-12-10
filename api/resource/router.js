const express = require('express');
const router = express.Router();

const {
  handleError,
  checkResourceId,
  checkResourcePayload,
} = require ('./middleware');

const Resources = require('./model');

router.get('/', (req, res, next) => {
  Resources.getAll()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
})

router.get('/:id', checkResourceId, (req, res, next) => {
  res.status(200).json(req.resource);
})

router.post('/', checkResourcePayload, (req, res, next) => { 
  Resources.createResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.use(handleError)

module.exports = router;
