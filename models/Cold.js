const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
// added mongoose.set('useCreateIndex', true); for error received in terminal:  DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
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
