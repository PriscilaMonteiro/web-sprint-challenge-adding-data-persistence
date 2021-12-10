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

module.exports = {
  projectSchema,
}