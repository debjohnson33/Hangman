const client = require('./pool.js');

client.on('connect', () => {
  console.log('Connected to hangman db');
});

const seedUserTable = () => {
  const seedUserQuery = `COPY users FROM '/Users/debjohnson/Development/hackreactor/Hangman/db/users.csv' DELIMITER ',' CSV HEADER;`
  client.query(seedUserQuery)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
}

const seedWordTable = () => {
  const seedWordQuery = `COPY words FROM '/Users/debjohnson/Development/hackreactor/Hangman/db/words.csv' DELIMITER ',' CSV HEADER;`
  client.query(seedWordQuery)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
}

seedUserTable();
seedWordTable();