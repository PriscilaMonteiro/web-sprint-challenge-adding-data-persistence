const db = require('../../data/dbConfig')

async function  getAll () {
  const rows = await db ('projects')
   
  rows.forEach((rows) => {
    if(rows.project_completed === 0) {
      rows.project_completed = false;
    } else {
      rows.project_completed = true;
    }
  })
  return rows
}

async function  getById (project_id) {
  const project = await db ('projects')
    .where('project_id', project_id)
    .first();

    return {
      ...project,
      project_completed:
        project.project_completed === 0
          ? false : true,
    }
}


module.exports = {
  getAll,
  getById,
}
