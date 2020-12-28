const express = require('express');
const app = express();
const port = 3000;
const db = require('../db/pool.js');

// db.on('connect', () => {
//   console.log('Connected to hangman db');
// });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(express.static('public'));

// need endpoint for user
app.get('/api/users/:username', (req, res) => {
  db.getUser(req.params.username, (err, results) => {
    console.log('Getting user');
    err ? console.log(err) : res.send(results);
  })
});

// need enpoint for words ? 3 one for easy, one for medium, one for hard?
app.get('/api/words/:difficulty', (req, res) => {
  db.getWords(req.params.difficulty, (err, results) => {
    console.log(`Getting ${req.params.difficulty} words`);
    err ? console.log(err) : res.send(results);
  })
})

// post for adding user
app.post('/api/users/:username', (req, res) => {
  db.addUser(req.params.username, (err, results) => {
    console.log(`Add ${req.params.username} to users`);
    err ? console.log(err) : res.send(results);
  })
})
// post for adding word

app.listen(port, () => {
  console.log(`Hangman app is listening at http://localhost:${port}`);
});
