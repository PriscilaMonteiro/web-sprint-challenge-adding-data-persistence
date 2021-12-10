const db = require('../../data/dbConfig');
const Task = require('./model');


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


module.exports = {
  handleError,
  checkTaskId,
}
