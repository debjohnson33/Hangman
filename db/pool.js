const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

//const databaseConfig = { connectionString: process.env.DATABASE_URL };
const pool = new Pool({
  user: 'debjohnson',
  host: 'localhost',
  database: 'hangman',
  port: 5432
});

const getUser = (username, callback) => {
  const getUserQuery = `SELECT * FROM users WHERE username = '${username}';`;
  pool.query(getUserQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows[0]);
    }
  });
};

const getWords = (difficulty, callback) => {
  const getWordsQuery = `SELECT * FROM words WHERE difficulty = '${difficulty}'`;
  pool.query(getWordsQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
};

module.exports = {
  pool,
  getUser,
  getWords
};
