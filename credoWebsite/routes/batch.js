var express = require('express');
var router = express.Router();

const batchController = require("../controllers/batchController");

/* GET NFT Page */
router.get('/', function(req, res) {
  res.render('index');
});

// Create new NFT entry in db (POST)
router.post('/create', batchController.token_create);


router.get('/:batchNumber', function(req, res) {
    console.log(req.params.batchNumber);
    res.render('index');
});

module.exports = router;
