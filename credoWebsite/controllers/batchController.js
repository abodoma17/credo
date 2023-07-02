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
                console.log(token);

                res.redirect("/");
            }
        }
    }),
];


exports.token_getID = [

    //validate
    body("batch_num")
    .trim()
    .escape(),

    asyncHandler( async (req, res, next) => {
        console.log(`BATCH NUMBER RECEIVED: ${req.body.batch_num}`);

        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            console.log("ERROR");
            res.send(errors.array());
        }
        else{
            const tokenExists = await Token.findOne({ batch_num: req.body.batch_num }).exec();
            const newTokenID = tokenExists.token_id;

            if(tokenExists){
                console.log(`Token with id ${newTokenID} exits, redirecting.`)
                res.redirect(`/batch/${newTokenID}`);
            }
            else{
                res.send("NO BATCH WITH THIS ID");
            }
        }
    }),
];