const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const coldSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const Cold = mongoose.model("Cold", coldSchema);

module.exports = Cold;
