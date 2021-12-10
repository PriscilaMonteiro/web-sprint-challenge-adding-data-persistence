const db = require('../../data/dbConfig')

async function getAll () {
  const rows = await db ('resources')
  
  return rows
}

async function getById (id) {
  const row = await db ('resources')
    .where('resource_id', id)
    .first();
  return row
}

const createResource = async (resource) => {
  const [id] = await db("resources")
    .insert(resource);
  const newResource = await getById(id);
  return newResource;
};

module.exports = {
  getAll,
  getById,
  createResource,
}
