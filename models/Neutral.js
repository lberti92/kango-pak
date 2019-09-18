const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const neutralSchema = new Schema ({
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

const Neutral = mongoose.model("Neutral", neutralSchema);

module.exports = Neutral;