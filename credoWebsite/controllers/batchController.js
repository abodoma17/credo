const Token = require("../models/token");
const SubBatch = require("../models/subbatch");
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
            
            if(tokenExists){
                const newTokenID = tokenExists.token_id;
                console.log(`Token with id ${newTokenID} exists, redirecting.`)
                res.redirect(`/batch/${newTokenID}`);
            }
            else{
                res.render('retrieveBatch', {error: `No Batch with batch number: ${req.body.batch_num}`});
            }
        }
    }),
];

exports.batch_recall = [
        asyncHandler( async (req, res, next) => {
            let BN = req.body.batch_num;
            let recipients = await SubBatch.find({parent_num: BN}).select('subBatch_num recipients').exec();
            if (recipients){
                console.log(recipients);
                res.render('recallResult', {subbatches: recipients})
            }else{
                res.render('recallBatch', {error: `No Batch with batch number: ${req.body.batch_num}`});
            }
            
        }
    )
];