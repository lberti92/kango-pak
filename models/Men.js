const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const menSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    weight: {
        type: Number,
        required: true
    },
    weatherId: [Number] 
});

const Men = mongoose.model("Men", menSchema);

module.exports = Men;