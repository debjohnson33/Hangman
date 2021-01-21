const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

client.connect();
// const client = new Client({
//   user: 'debjohnson',
//   host: 'localhost',
//   database: 'hangman',
//   port: 5432
// });

const getUser = (username, callback) => {
  const getUserQuery = `SELECT * FROM users WHERE username = '${username}';`;
  client.query(getUserQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows[0]);
    }
  });
};

const getUserScore = (username, callback) => {
  const getUserScoreQuery = `SELECT score FROM users WHERE username = '${username}';`;
  client.query(getUserScoreQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows[0]);
    }
  });
};

const getWords = (difficulty, callback) => {
  const getWordsQuery = `SELECT * FROM words WHERE difficulty = '${difficulty}'`;
  client.query(getWordsQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
};

const getAllWords = (callback) => {
  const getAllWordsQuery = `SELECT * FROM words;`;
  client.query(getAllWordsQuery, (err, res) => {
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
  client.query(addUserQuery, (err, res) => {
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
  client.query(updateScoreQuery, (err, res) => {
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
  client.query(addWordQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
}

module.exports = {
  client,
  getUser,
  getUserScore,
  getWords,
  getAllWords,
  addUser,
  updateUserScore,
  addWord
};
