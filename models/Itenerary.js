const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itenerarySchema = new Schema({
  trip: {
    type: Schema.Types.ObjectId,
    ref: "Trip"
  },
  item: {
    type: String,
    unique: false,
    required: [true, "text is required"]
  }
});

const Itenerary = mongoose.model("Itenerary", itenerarySchema);

module.exports = Itenerary;
