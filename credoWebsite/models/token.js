const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    batch_num: { type: String, required: true },
    token_id: {type: Number, required: true}
});

module.exports = mongoose.model("Token", tokenSchema);

