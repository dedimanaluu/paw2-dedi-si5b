var express = require('express');
var router = express.Router();
const PariwisataController = require('../controller/pariwisata');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('index', {title: 'Express'});

router.post('/', PariwisataController.createdPariwisata)

module.exports = router;
