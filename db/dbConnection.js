import pool from './pool';

pool.on('connect', () => {
  console.log('Connected to hangman db');
});


// Create table functions go here
const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(100) UNIQUE NOT NULL, score integer DEFAULT 0 NOT NULL, created_on DATE NOT NULL)`;

  pool.query(userCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createWordTable = () => {
  const wordCreateQuery = `CREATE TABLE IF NOT EXISTS words (id SERIAL PRIMARY KEY, word VARCHAR(100) NOT NULL, difficulty VARCHAR(10) NOT NULL, created_on DATE NOT NULL)`;

  pool.query(wordCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const dropUserTable = () => {
  const usersDropQuery = 'DROP TABLE IF EXISTS users';
  pool.query(usersDropQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const dropWordTable = () => {
  const wordsDropQuery = 'DROP TABLE IF EXISTS words';
  pool.query(wordsDropQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createAllTables = () => {
  createUserTable();
  createWordTable();
};

const dropAllTables = () => {
  dropUserTable();
  dropWordTable();
};

pool.on('remove', () => {
  console.log('removed');
  process.exit(0);
});

export {
  createAllTables,
  dropAllTables
};

require('make-runnable');