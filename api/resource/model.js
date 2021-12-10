const db = require('../../data/dbConfig')

async function getAll () {
  const rows = await db ('resources')
  return rows
}


module.exports = {
  getAll
}
