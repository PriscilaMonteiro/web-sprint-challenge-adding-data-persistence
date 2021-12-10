const { taskSchema } = require('../schema');
const Task = require('./model');


// eslint-disable-next-line no-unused-vars
function handleError(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
  })
}

async function checkTaskId (req, res, next) {
  try{
    const { id } = req.params
    const task = await Task.getById(id)
    if(task){
      req.task = task
      next()
    } else {
      next({ status:404, message: `task with id ${id} is not found`})
    }
  } catch (err) {
    next(err);
  }
}

async function checkTaskPayload(req, res, next) {
  try {
    const validated = await taskSchema.validate(
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
  checkTaskId,
  checkTaskPayload,
}
