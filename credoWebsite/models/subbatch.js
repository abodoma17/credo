const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subbatchSchema = new Schema({
    parent_id: { type: Number, required: true },
    parent_num: { type: Number, required: true },
    subBatch_num: {type: String, required: true},
    token_id: {type: Number, required: true},
    recipients: [String]
});

module.exports = mongoose.model("SubBatch", subbatchSchema);

