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
        next();
    }
    else{
        res.render("permissionError");
    }
}

exports.isManufacturerORDistributer = (req, res, next) =>{
    if (req.user.role !== 'Pharmacy'){
        next();
    }
    else{
        res.render("permissionError");
    }
}