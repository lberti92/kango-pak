const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const clothingSchema = new Schema ({
    name: String,
    weight: Number,
    climate: [String],
    apparel: String
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;