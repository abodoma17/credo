var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/dashboard', auth.isAuthenticated, (req, res) => {
  res.render('dashboard', {role: req.user.role});
});

module.exports = router;
