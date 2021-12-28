const mysql = require('mysql2')
const config = require('./config')

const connections = mysql.createPool({
  port: config.MYSQL_PORT,
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  database: config.MYSQL_DATABASE,
  password: config.MYSQL_PASSWORD,
  connectionLimit: 10
})

connections.getConnection((err, conn) => {
  conn.connect(err => {
    if (err) {
      console.log('数据库连接失败');
    } else {
      console.log('数据库连接成功');
    }
  })
})

module.exports = connections.promise()