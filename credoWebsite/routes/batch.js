var express = require('express');
var router = express.Router();
const auth = require("../middleware/auth");
const batchController = require("../controllers/batchController");

/* GET NFT Page */
router.get('/', auth.isAuthenticated, auth.isManufacturer, function(req, res) {
  res.render('batch');
});

// Create new NFT entry in db (POST)
router.post('/create', auth.isAuthenticated, auth.isManufacturer, batchController.token_create);

router.post('/tokenData', auth.isAuthenticated, auth.isManufacturerORDistributer, batchController.token_getID);

router.get("/form", (req, res) => {
  res.render("form");
})

router.get('/:tokenID', function(req, res) {
    console.log(`TOKEN ID RECEIVED: ${req.params.tokenID}`);
    tokenID = req.params.tokenID;
    res.render('vitals', { tokenID });
});

module.exports = router;
