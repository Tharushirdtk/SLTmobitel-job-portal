const mongoose = require('mongoose');

const CVSchema = new mongoose.Schema({
  jobTitle: String,
  name: String,
  gender: String,
  contact: String,
  field: String,
  file: String,
  status: { type: String, default: 'Received' }, 
});

module.exports = mongoose.model('CV', CVSchema);
