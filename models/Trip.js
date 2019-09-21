const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: {
        type: String,
        required: [true, "text is required"]
    },
    user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  itenerary: {
    type: Schema.Types.ObjectId,
    ref: "Itenerary"
  }
});


const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
