const db = require('../../data/dbConfig');
const Project = require('./model');


function handleError(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
  })
}

async function checkProjectId (req, res, next) {
  try{
    const { id } = req.params
    const project = await Project.getById(id)
    if(project){
      req.project = project
      next()
    } else {
      next({ status:404, message: `project with id ${id} is not found`})
    }
  } catch (err) {
    next(err);
  }
}


module.exports = {
  handleError,
  checkProjectId,
}
