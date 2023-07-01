var express = require('express');
var router = express.Router();
var scanController = require('../controllers/scanController');

router.get('/', function(req, res, next) {
    res.render('scanner');
  });

router.get('/:id', scanController.qr_code_get)

module.exports = router;