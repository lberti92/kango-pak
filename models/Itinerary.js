const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
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

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
