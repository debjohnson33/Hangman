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
app.get('/api/words', (req, res) => {
  // send back words
})

// ?? any other endpoints?
// post for adding user
// post for adding word

app.listen(port, () => {
  console.log(`Hangman app is listening at http://localhost:${port}`);
});
