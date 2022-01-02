var express = require('express');
var router = express.Router();
var axios = require('axios').default;

router.get('/', function(req, res, next) {
  axios.get(`http://${process.env.SCRAPING_SERVER_HOST}:${process.env.SCRAPING_SERVER_PORT}/`).then(response => {
    res.send(response.data);
  }).catch(err => {
    res.send(err);
  })
});

router.get('/vaccinated', function(req, res, next) {
  axios.get(`http://${process.env.SCRAPING_SERVER_HOST}:${process.env.SCRAPING_SERVER_PORT}/vaccinated`).then(response => {
    res.send(response.data);
  }).catch(err => {
    res.send(err);
  })
});

module.exports = router;
