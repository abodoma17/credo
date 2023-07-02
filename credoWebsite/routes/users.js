var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register.pug')
});
router.post('/register', userController.user_register);

router.get('/login', function(req, res, next) {
  res.render('login.pug')
});
router.post('/login', userController.user_login);
module.exports = router;
