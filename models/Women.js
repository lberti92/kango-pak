const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const womenSchema = new Schema({
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

const Women = mongoose.model("Women", womenSchema);

module.exports = Women;