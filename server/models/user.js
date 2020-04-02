const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  name: { type: String, required: true, maxlength:10 },
  email: { type: String, required: true },
  age: { type: Number, required: true, max:100 },
  mobile: { type: Number, required: true }
});

module.exports = mongoose.model('user', userSchema);