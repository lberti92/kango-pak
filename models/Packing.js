const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packingSchema = new Schema({
  trip: {
    type: Schema.Types.ObjectId,
    ref: "Trip"
  },
  items: {
    type: String
  }, 
  totalWeight: {
    type: Number
  },
  notes: {
    type: String
  }
});

const Packing = mongoose.model("Packing", packingSchema);

module.exports = Packing;
