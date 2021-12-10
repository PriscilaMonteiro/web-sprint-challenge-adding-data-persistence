const yup = require('yup')

const projectSchema = yup.object().shape({
  project_name:yup
    .string()
    .typeError('project_name needs to be a string')
    .required('project_name is missing'),
  project_description:yup
    .string()
    .typeError('project_description needs to be a string'),
  project_completed:yup
    .boolean()
    .typeError('project_completed needs to be a boolean'),
})

const resourceSchema = yup.object().shape({
  resource_name:yup
    .string()
    .typeError('resource_name needs to be a string')
    .required('resource_name is missing'),
  resource_description:yup
    .string()
    .typeError('resource_description needs to be a string'),
})

const taskSchema = yup.object().shape({
  project_id:yup
    .number()
    .typeError('must be integer')
    .required('project_id is required'),
  task_notes:yup
    .string()
    .typeError('task_notes needs to be a string'),
  task_description:yup
    .string()
    .typeError('task_description needs to be a string'),
  task_completed:yup
    .boolean()
    .typeError('task_completed needs to be a boolean'),
})

module.exports = {
  projectSchema,
  resourceSchema, 
  taskSchema
}