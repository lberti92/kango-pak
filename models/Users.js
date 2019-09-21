const mongoose = require("mongoose"); mongoose.set('useCreateIndex', true);
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"]
  },
  password: {
    type: String,
    unique: false,
    validate: {
      validator: function (v) {
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v);
      },
      message: props => `${props.value} is not a valid password`
    },
    required: [true, "password is required"]
  },
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  trips: [{
    type: Schema.Types.ObjectId,
    ref: 'Trips'
  }]
});

usersSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

usersSchema.methods.validPassword = function (password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
}

const User = mongoose.model("User", usersSchema);

module.exports = User;
