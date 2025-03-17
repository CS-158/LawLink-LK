const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  displayName: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  languagesKnown: [{ type: String }],
  practiceCourts: [{ type: String }],
  qualifications: [{ type: String, default: [] }], // Store file paths or URLs
  specialization: [{ type: String, required: true }],
  professionalBiography: { type: String, default: '' },
  profilePhoto: { type: String, default: '' }, // URL or path to photo
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lawyer', lawyerSchema);