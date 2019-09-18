const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const womenSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    weight: {
        type: String,
        required: true
    }
})

const Women = mongoose.model("Women", womenSchema);

module.exports = Women;