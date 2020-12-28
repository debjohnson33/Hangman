const faker = require('faker');
const fs = require('fs');

const difficulty = ['easy', 'medium', 'hard'];

const wordsWrite = fs.createWriteStream('db/words.csv');
wordsWrite.write('id,word,difficulty,created_on\n', 'utf8');

const makeWords = () => {
  for (let i = 0; i < 100; i++) {
    let obj = {};
    obj.id = i;
    obj.word = faker.commerce.product();
    obj.difficulty = difficulty[Math.floor(Math.random() * difficulty.length)];
    obj.created_on = new Date().toISOString().slice(0,10);
    wordsWrite.write(`${obj.id},${obj.word},${obj.difficulty},${obj.created_on}\n`, 'utf8');
  }
}

const usersWrite = fs.createWriteStream('db/users.csv');
usersWrite.write('id,username,score,created_on\n', 'utf8');

const makeUsers = () => {
  for (let i = 0; i < 10; i++) {
    let obj = {};
    obj.id = i;
    obj.username = faker.internet.userName();
    obj.score = 0;
    obj.created_on = new Date().toISOString().slice(0,10);
    usersWrite.write(`${obj.id},${obj.username},${obj.score},${obj.created_on}\n`);
  }
}

makeWords();
makeUsers();