const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const warmSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const Warm = mongoose.model("Warm", warmSchema);

module.exports = Warm;