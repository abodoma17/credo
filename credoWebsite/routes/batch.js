var express = require('express');
var router = express.Router();

const batchController = require("../controllers/batchController");

/* GET NFT Page */
router.get('/', function(req, res) {
  res.render('batch');
});

// Create new NFT entry in db (POST)
router.post('/create', batchController.token_create);

router.post('/tokenData', batchController.token_getID);

router.get("/form", (req, res) => {
  res.render("form");
})

router.get('/:tokenID', function(req, res) {
    console.log(`TOKEN ID RECEIVED: ${req.params.tokenID}`);
    tokenID = req.params.tokenID;
    res.render('vitals', { tokenID });
});

module.exports = router;
