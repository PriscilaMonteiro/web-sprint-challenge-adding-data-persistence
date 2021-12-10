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
}

async function  getById (task_id) {
  const task = await db ('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
    .where('task_id', task_id)
    .first();

  return {
    ...task,
    task_completed:
      task.task_completed === 0
        ? false : true,
  }
}

const createTask = async (task) => {
  const [id] = await db("tasks")
    .insert(task);
  const newTask = await getById(id);
  return newTask;
};



module.exports = {
  getAll,
  getById,
  createTask,
}
