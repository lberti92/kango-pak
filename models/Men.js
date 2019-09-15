const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menSchema = new Schema ({
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

const Men = mongoose.model("Men", menSchema);

module.exports = Men;