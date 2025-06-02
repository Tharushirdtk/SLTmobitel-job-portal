const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  jobId: String,
  field: String,
  position: String,
  contact: String,
  background: String,
  salary: String,
  dueDate: String,
  email: String,
  location: String,
  workType: String,
  description: String,
  status: { type: String, default: 'Pending' },
  date: { type: String, default: new Date().toISOString().split('T')[0] },
});

module.exports = mongoose.model('Job', JobSchema);
