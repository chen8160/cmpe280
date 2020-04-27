const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'project_280_game',
});

connection.connect();


function dbQuery(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, res) => {
      if (err) reject(err);
      console.log('[dbQuery] sql: ', sql, 'result:', res);
      resolve(res);
    });
  });
}

module.exports.getData = () => {
  const sql = 'SELECT * FROM project_280_game.games;';
  return dbQuery(sql);
};
