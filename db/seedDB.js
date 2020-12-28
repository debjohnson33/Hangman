const pool = require('./pool.js');

pool.on('connect', () => {
  console.log('Connected to hangman db');
});

const seedUserTable = () => {
  const seedUserQuery = `COPY users FROM '/Users/debjohnson/Development/hackreactor/Hangman/db/users.csv' DELIMITER ',' CSV HEADER;`
  pool.query(seedUserQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

const seedWordTable = () => {
  const seedWordQuery = `COPY words FROM '/Users/debjohnson/Development/hackreactor/Hangman/db/words.csv' DELIMITER ',' CSV HEADER;`
  pool.query(seedWordQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

seedUserTable();
seedWordTable();