const projects = [
  {
    project_name: 'Web API',
    project_description:
      'Build APIs',
  },
  {
    project_name: 'Databases',
    project_description:
      'Learn SQL',
  },
  {
    project_name: 'Authentication',
    project_description:
      '',
  },
];

const resources = [
  {
    resource_name: 'keyboard',
    resource_description: 'resource 1 - this is optional',
  },
  {
    resource_name: 'Computer',
    resource_description: 'Windows PC',
  },
];

const tasks = [
  {
    project_id: 1,
    task_description: 'Do foo',
    task_notes: 'step 1',
  },
  {
    project_id: 1,
    task_description: 'Do bar',
    task_notes: 'Use Postman!',
  },
  {
    project_id: 1,
    task_description: 'Do baz',
    task_notes: 'Have fun!',
  },
];

const project_resources = [
 {
    project_id: 1,
    resource_id: 1,
  },
  {
    project_id: 2,
    resource_id: 2,
  }, 
];


exports.seed = async function(knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(project_resources)
}

