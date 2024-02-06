# Lab 12 : The Ride Hailing Service, Part 3
C.R. Calabrese, July 1, 2021
CS 120: Web Programming with Prof. Ming Chow

## Parts Completed
I've set up a POST route for my Node application that gives back a list of cars if the correct
parameters are given in the body of the POST message.

For the "going beyond" items:
I'm now inserting ride requests into a postgres database.
I have a path where drivers can send POST requests to offer rides.

## Collaborators
I completed this lab alone.

I used these instructions when trying to make a table in my database. It didn't work for me, but the author
still deserves recognition:
https://dev.to/danielmabadeje/how-to-create-tables-on-heroku-postgresql-1n42

## Time Spent
I've spent about three and a half hours on this lab.


# Lab 11 : Getting Started with the Server Side using Heroku and Node.js

C.R. Calabrese, June 29, 2021
CS 120: Web Programming with Prof. Ming Chow

## Parts Completed
All parts of the lab have been completed.

## Collaborators
I completed this lab alone.

## Time Spent
I've spent about an hour and a half or two hours on this lab.


# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
