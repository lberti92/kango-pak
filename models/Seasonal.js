const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const seasonalSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const Seasonal = mongoose.model("Seasonal", seasonalSchema);

module.exports = Seasonal;