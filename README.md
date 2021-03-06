# Project Name

## Hangman

![hangman](./presentationImages/hangman_game.png?raw='true')

This is a hangman game where you try to guess the word one letter at a time. If you get the letter wrong, the 'hangman' picture will have a body part added. You can guess wrong 8 times and then the 'hangman' will be completely drawn and you 'lose' for that word.

The more letters you guess, the higher your score will go. When you finish the word, the score in the database will be updated if your score is higher than what was in there before.

![](./presentationImages/hangman.gif)

If you want to try another word, click on the 'Next Word' button.

If you want to quit the game, click on the 'Quit' button and it will log you out.

## Development

If you want to contribute or make your own version, fork and clone this repo, then run

```npm install```

It is set up to use PostgreSQL, so you will need to create a database with the name 'hangman' before you can run the setup and seed scripts. You will also have to change the connection setup to reflect the correct user, host, port, etc in the db/pool.js file.

To start off with users and words in the database, run:

```npm run setup```

then run

```npm run seed:csv```
(This make csv files in your db folder that are used in the seedDB script to populate the database)

and

```npm run seed```

Once you have successfully seeded the database, you can start the server with

```npm start```

and build using webpack with

```npm run build```

Then you can open it up on the browser by going to:

```http://localhost:3000```