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

const getAllWords = (callback) => {
  const getAllWordsQuery = `SELECT * FROM words;`;
  pool.query(getAllWordsQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
};

const addUser = (username, callback) => {
  const today = new Date().toISOString().slice(0,10);
  const addUserQuery = `INSERT INTO users(username, created_on) VALUES ('${username}', '${today}');`
  pool.query(addUserQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const updateUserScore = (username, score, callback) => {
  //score = parseInt(score, 10);
  const updateScoreQuery = `UPDATE users SET score = ${score} WHERE username = '${username}';`;
  pool.query(updateScoreQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  })
}

const addWord = (word, difficulty, callback) => {
  const today = new Date().toISOString().slice(0,10);
  const addWordQuery = `INSERT INTO words(word, difficulty, created_on) VALUES ('${word}', '${difficulty}', '${today}');`;
  pool.query(addWordQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
}

module.exports = {
  pool,
  getUser,
  getWords,
  getAllWords,
  addUser,
  updateUserScore,
  addWord
};
