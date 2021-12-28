const connection = require('../app/database')

class UserService {
 async create (user) {
  const { username, password } = user
  const statement = `INSERT INTO user (username, password) VALUES (?, ?);`

  const [result] = await connection.execute(statement, [username, password])
  return result
 }

 async getUserByName (name) {
  const statement = `SELECT * FROM user WHERE username = ?;`

  const [result] = await connection.execute(statement, [name])
  return result
 }
}

module.exports = new UserService()