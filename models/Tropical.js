const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const tropicalSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const Tropical = mongoose.model("Tropical", tropicalSchema);

module.exports = Tropical;