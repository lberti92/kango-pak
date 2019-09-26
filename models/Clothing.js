const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const clothingSchema = new Schema ({
    name: String,
    weight: Schema.Types.Decimal128,
    climate: [String],
    apparel: String
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;