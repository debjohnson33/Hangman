import client from './pool';

client.on('connect', () => {
  console.log('Connected to hangman db');
});


// Create table functions go here
const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(100) UNIQUE NOT NULL, score integer DEFAULT 0 NOT NULL, created_on DATE NOT NULL DEFAULT CURRENT_DATE)`;

  client.query(userCreateQuery)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
};

const createWordTable = () => {
  const wordCreateQuery = `CREATE TABLE IF NOT EXISTS words (id SERIAL PRIMARY KEY, word VARCHAR(100) NOT NULL, difficulty VARCHAR(10) NOT NULL, created_on DATE NOT NULL DEFAULT CURRENT_DATE)`;

  client.query(wordCreateQuery)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
};

const dropUserTable = () => {
  const usersDropQuery = 'DROP TABLE IF EXISTS users';
  client.query(usersDropQuery)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
};

const dropWordTable = () => {
  const wordsDropQuery = 'DROP TABLE IF EXISTS words';
  client.query(wordsDropQuery)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
};

const createAllTables = () => {
  createUserTable();
  createWordTable();
};

createAllTables();
// const dropAllTables = () => {
//   dropUserTable();
//   dropWordTable();
// };

// client.on('remove', () => {
//   console.log('removed');
//   process.exit(0);
// });

// export {
//   createAllTables,
//   dropAllTables
// };

require('make-runnable');