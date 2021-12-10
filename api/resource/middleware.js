const db = require('../../data/dbConfig');
const { resourceSchema } = require('../schema');
const Resource = require('./model');


function handleError(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
  })
}

async function checkResourceId (req, res, next) {
  try{
    const { id } = req.params
    const resource = await Resource.getById(id)
    if(resource){
      req.resource = resource
      next()
    } else {
      next({ status:404, message: `resource with id ${id} is not found`})
    }
  } catch (err) {
    next(err);
  }
}

async function checkResourcePayload(req, res, next) {
  try {
    const validated = await resourceSchema.validate(
      req.body,
      { strict: false, stripUnknown: true }
    )
    req.body = validated
    next();
  } catch (err) {
    next({ message: `${err.message}`, status: 400 });
  }
}

module.exports = {
  handleError,
  checkResourceId,
  checkResourcePayload,
}
