const pool = require('../database-mysql') // Set up your MySQL connection pool
const db = require('../database-mysql/db')
exports.getItemsByCategory = category => {
  const query = 'SELECT * FROM menu_items WHERE category = ?'
  return pool.query(query, [category], (error, rows) => {
    if (error) {
      console.log('An error occurred:', error)
      return []
    } else {
      return rows
    }
  })
}
