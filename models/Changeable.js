const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const changeableSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const Changeable = mongoose.model("Changeable", changeableSchema);

module.exports = Changeable;