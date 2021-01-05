const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require('../db/pool.js');

// db.on('connect', () => {
//   console.log('Connected to hangman db');
// });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public/dist')));

// need endpoint for user
app.get('/api/users/:username', (req, res) => {
  db.getUser(req.params.username, (err, results) => {
    console.log('Getting user');
    err ? console.log(err) : res.send(results);
  })
});

app.get('/api/users/:username/score', (req, res) => {
  db.getUserScore(req.params.username, (err, results) => {
    console.log('Getting score');
    err ? console.log(err) : res.send(results);
  });
})

app.put('/api/users/:username/:score', (req, res) => {
  db.updateUserScore(req.params.username, +req.params.score, (err, results) => {
    console.log('Updating score');
    err ? console.log(err) : res.send(results);
  });
});

app.get('/api/words/all', (req, res) => {
  db.getAllWords((err, results) => {
    console.log(`Getting all words`);
    err ? console.log(err) : res.send(results);
  });
});

// need enpoint for words ? 3 one for easy, one for medium, one for hard?
app.get('/api/words/:difficulty', (req, res) => {
  db.getWords(req.params.difficulty, (err, results) => {
    console.log(`Getting ${req.params.difficulty} words`);
    err ? console.log(err) : res.send(results);
  })
});


// post for adding user
app.post('/api/users/:username', (req, res) => {
  db.addUser(req.params.username, (err, results) => {
    console.log(`Add ${req.params.username} to users`);
    if (err) {
      console.log(err);
      res.status(500).send(err.detail);
    } else {
      res.send(results);
    }

  });
});

// post for adding word
app.post('/api/words', (req, res) => {
  const word = req.body.word;
  const difficulty = req.body.difficulty;
  db.addWord(word, difficulty, (err, results) => {
    console.log(`Added ${word} with ${difficulty} difficulty`);
    err ? console.log(err) : res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`Hangman app is listening at http://localhost:${PORT}`);
});
