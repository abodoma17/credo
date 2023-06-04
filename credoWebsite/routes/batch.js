var express = require('express');
var router = express.Router();

const batchController = require("../controllers/batchController");

/* GET NFT Page */
router.get('/', function(req, res) {
  res.render('index');
});

// Create new NFT entry in db (POST)
router.post('/create', batchController.token_create);

router.post('/tokenData', batchController.token_getID);

router.get('/:tokenID', function(req, res) {
    console.log(req.params.tokenID);
    tokenID = req.params.tokenID;
    res.render('nft', { tokenID });
});

module.exports = router;
