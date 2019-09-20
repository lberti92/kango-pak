const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const neutralSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    weight: {
        type: Number,
        required: true
    }
})

const Neutral = mongoose.model("Neutral", neutralSchema);

module.exports = Neutral;