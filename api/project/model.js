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

module.exports = {
  getAll
}
