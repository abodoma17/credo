const jwt = require('jsonwebtoken');
const User = require("../models/user");
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

// check if user is authenticated
exports.isAuthenticated = async (req, res, next) =>{

    const {token} = req.cookies;

    // make sure token exists
    if (!token){
        console.log("log in first 1")
        res.redirect("/users/login");
    }

    try {
        //verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        console.log("log in first 2")
        console.log(error)
    }
}

exports.isManufacturer = (req, res, next) =>{
    if (req.user.role === 'Manufacturer'){
        console.log("Access Granted 1")
    }
    else{
        console.log("Access Denied")
    }
    next();

}

exports.isManufacturerORDistributer = (req, res, next) =>{
    if (req.user.role === 'Manufacturer' || req.user.role === 'Distributer'){
        console.log("Access Granted 2")
    }
    else{
        console.log("Access Denied")
    }
    next();

}