const Token = require("../models/token");
const SubBatch = require("../models/subbatch");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// Create new token
exports.get_create = [
    asyncHandler( async(req, res, next) => {
        tokens = await Token.find().exec();
        recipients = await User.find({ role: {$ne : "Manufacturer"}}).select('company_name').exec();
        res.render('createSubBatch', {tokens, recipients, name: req.user.company_name});
    })
]

// Create new token
exports.token_create = [

    //validate
    body("subBatch_num")
    .trim()
    .escape(),

    asyncHandler( async (req, res, next) => {

        const errors = validationResult(req);
        
        const subbatch = new SubBatch({parent_id: req.body.parent_token_id, parent_num: req.body.parent_batch_num, subBatch_num: req.body.subBatch_num, token_id: req.body.subBatch_token_id, recipients: req.body.recipients});

        if(!errors.isEmpty()) {
            console.log("ERROR");
            res.send(errors.array());
        }
        else{
            const subtokenExists = await SubBatch.findOne({ subBatch_num: req.body.subBatch_num }).exec();
            if(subtokenExists){
                res.send("Token already exists");
                console.log(tokenExists);
            }
            else{
                await subbatch.save();

                console.log("TOKEN SAVED");
                console.log(subbatch);

                res.redirect("/dashboard");
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
            const tokenExists = await SubBatch.findOne({ subBatch_num: req.body.batch_num }).exec();
            
            if(tokenExists){
                res.render('subBatchVitals', {parent_id: tokenExists.parent_id, subBatch_id: tokenExists.token_id});
            }
            else{
                res.render('retrieveBatch', {error: `No Batch with batch number: ${req.body.batch_num}`});
            }
        }
    }),
];