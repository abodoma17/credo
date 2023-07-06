var express = require('express');
var router = express.Router();
const auth = require("../middleware/auth");
const subBatchController = require("../controllers/subBatchController");

/* GET Create NFT Page */
router.get('/create', auth.isAuthenticated, auth.isDistributor, subBatchController.get_create);

// POST Create NFT 
router.post('/create', auth.isAuthenticated, auth.isDistributor, subBatchController.token_create);

router.get('/retrieve', auth.isAuthenticated, (req, res, next) => {
    res.render('retrieveSubBatch');
});

router.post('/tokenData', auth.isAuthenticated, subBatchController.token_getID);

module.exports = router;
