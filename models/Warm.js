const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const warmSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Warm = mongoose.model("Warm", warmSchema);

module.exports = Warm;