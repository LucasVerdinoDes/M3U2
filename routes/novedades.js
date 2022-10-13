var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/novedades', function(req, res, next) {
  res.send('hola soy la pag de novedades');

module.exports = router;
