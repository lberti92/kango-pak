const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accessoriesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    weight: {
        type: String,
        true: true
    }
})

const Accessory = mongoose.model("Accessory", accessoriesSchema);

module.exports = Accessory;