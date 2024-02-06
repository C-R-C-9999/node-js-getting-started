const cool = require('cool-ascii-faces')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const sample_cars =
    [
        {
            id : "5cdf411856e9c200042989d7",
            username : "JANET",
            lat : 42.354951,
            lng : -71.0509,
            created_at : "2020-05-17T23:17:44.427Z"
        },
        {
            id : "5cf583aafbbfe80004456918",
            username : "mXfkjrFw",
            lat : 42.3453,
            lng : -71.0464,
            created_at : "2020-06-03T20:31:38.378Z"
        },
        {
            id : "5cf583aafbbfe80004456919",
            username : "nZXB8ZHz",
            lat : 42.3662,
            lng : -71.0621,
            created_at : "2020-06-03T20:31:38.611Z"
        },
        {
            id : "5cf583aafbbfe8000445691a",
            username : "Tkwu74WC",
            lat : 42.3603,
            lng : -71.0547,
            created_at : "2020-06-03T20:31:38.786Z"
        }
    ]

const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL || "postgres://nodepsqlapp_user:abc123@localhost:5432/nodepsqlapp",
    ssl: {
        rejectUnauthorized : false,
    }
});
client.connect();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded())
  .use(cors())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .post("/rides", cors(), (req, res) => {
    if (!req.body.username || !req.body.lat || !req.body.lng) {
      res.send('{"error":"Whoops, something is wrong with your data!"}');
    }
    else {
      res.send(JSON.stringify(sample_cars));
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
