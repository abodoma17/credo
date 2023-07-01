const Token = require("../models/token");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.qr_code_get = asyncHandler(async(req, res, next) => {
    const batch = await Token.findOne({ batch_num: req.params.id}).exec();

    if(batch)
    {
        res.render("verification", {verified: 'true', batch_num: req.params.id});
    }
    else{
        res.render("verification", {verified: 'false', batch_num: req.params.id});
    }
});