var express = require('express');
var router = express.Router();
const auth = require("../middleware/auth");
const batchController = require("../controllers/batchController");

/* GET Create NFT Page */
router.get('/create', auth.isAuthenticated, auth.isManufacturer, function(req, res) {
  res.render('createBatch', {name: req.user.company_name})
});

// Create new NFT entry in db (POST)
router.post('/create', auth.isAuthenticated, auth.isManufacturer, batchController.token_create);

router.post('/tokenData', auth.isAuthenticated, batchController.token_getID);

router.get("/form", (req, res) => {
  res.render("form");
})

// GET batch retreival page
router.get('/retrieve', auth.isAuthenticated, (req, res) => {
  res.render('retrieveBatch');
});

router.get('/:tokenID', function(req, res) {
    console.log(`TOKEN ID RECEIVED: ${req.params.tokenID}`);
    tokenID = req.params.tokenID;
    res.render('vitals', { tokenID });
});

module.exports = router;
