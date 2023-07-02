const User = require("../models/user");
const saltRounds = 10
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

exports.user_register =
  async (req, res) => {
    const { CompanyName, email, plainTextPassword, passwordC, role } = req.body
    console.log(CompanyName, email, plainTextPassword, passwordC, role)
    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
      return res.json({ status: 'error', error: 'Invalid password' })
    }
    if (plainTextPassword.length < 6) {
      res.render('register', { error: 'Password too small' })
    }
    if (plainTextPassword !== passwordC) {
      res.render('register', { error: 'Password does not match' })
    }
    const password = await bcrypt.hash(plainTextPassword, saltRounds)
    const user = new User({
      company_name: CompanyName,
      email: email,
      password: password,
      role: role
    });

    const userExists = await User.findOne({ email: req.body.email }).exec();

    if (userExists) {
      res.render('register', { error: 'User Already Exists' })
      console.log(userExists);
    }
    else {
      await user.save();
      console.log("USER SAVED");
      console.log(user);
      res.redirect("/");
    }
    console.log('User created successfully:', user)
  }

exports.user_login =
  async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email }).lean()

    if (!user) {
      //return res.json({ status: 'error', error: 'Invalid username/password', label: 'Invalid email or password' })
      res.render('login', { error: 'Invalid E-mail or Password' })
      console.log("NO USER")
    }

    if (await bcrypt.compare(password, user.password)) {
      // the username, password combination is successful
      const userToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
          role: user.role
        },
        JWT_SECRET
      )
      const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.EXPIRE_TOKEN)
      };
    
      res
        .cookie('token', userToken, options)
        //.json({ success: true, userToken })
        .redirect("/")

      console.log("Login Success")
    } else {
      res.render('login', { error: 'Invalid E-mail or Password' })
      console.log("NO USER")
    }
  }


//LOG OUT USER
exports.logout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({
    success: true,
    message: "Logged out"
  })
}