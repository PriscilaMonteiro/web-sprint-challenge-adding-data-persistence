const db = require('../../data/dbConfig')


async function  getAll () {
  const rows = await db ('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    // .groupBy('t.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
   
  rows.forEach((rows) => {
    if(rows.task_completed === 0) {
      rows.task_completed = false;
    } else {
      rows.task_completed = true;
    }
  })

  return rows
  
  // console.log (rows)

  // const result = { 
  //   project_id: result.project_id,
  //   project_name: result.project_name,
  //   tasks: []
  // }
  
  // result.rows = rows
  // return result


}

module.exports = {
  getAll,
}
