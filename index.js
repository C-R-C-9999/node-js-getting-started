const cool = require('cool-ascii-faces')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

function ridesJSON(req) {
    var response;
    response.uname = req.username;
    return JSON.stringify([]);
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .post("/rides", (req, res) => {
    if (!req.body.username || !req.body.lat || !req.body.lng) {
      res.send('{"error":"Whoops, something is wrong with your data!"}');
    }
    else {
      res.send(JSON.stringify([]));
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
