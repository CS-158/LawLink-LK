const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['client', 'lawyer'], default: 'client' }, // Add role for lawyers
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);