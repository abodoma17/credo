const Token = require("../models/token");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// Create new token
exports.token_create = [

    //validate
    body("batch_num")
    .trim()
    .escape(),

    asyncHandler( async (req, res, next) => {
        console.log(req.body.batch_num);
        console.log(req.body.token_id);

        const errors = validationResult(req);
        const token = new Token({
            batch_num: req.body.batch_num,
            token_id : req.body.token_id
        });

        console.log(token);

        if(!errors.isEmpty()) {
            console.log("ERROR");
            res.send(errors.array());
        }
        else{
            const tokenExists = await Token.findOne({ batch_num: req.body.batch_num }).exec();

            if(tokenExists){
                res.send("Token already exists");
                console.log(tokenExists);
            }
            else{
                await token.save();

                console.log("TOKEN SAVED");
                res.send(token);
            }
        }
    }),

];