const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);


const tripSchema = new Schema({  
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  itinerary: {
    type: Schema.Types.ObjectId,
    ref: "itinerary"
  },
  location: {
    type: String
  },
  length: {
    type: String
  },
  climate: {
    type: String
  }, 
  traveler: {
    type: String
  },
  luggage: {
    type: String
  },
  apparel: {
    type: String
  }
});


const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
