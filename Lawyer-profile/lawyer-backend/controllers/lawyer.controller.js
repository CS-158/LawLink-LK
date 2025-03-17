const Lawyer = require('../models/lawyer.model');
const path = require('path');

// Create or Update Lawyer Profile
exports.updateProfile = async (req, res) => {
  try {
    const { displayName, fullName, email, contactNumber, languagesKnown, practiceCourts, specialization, professionalBiography } = req.body;
    const qualifications = req.files ? req.files.map(file => file.path) : [];
    const profilePhoto = req.file ? req.file.path : '';

    const lawyerData = {
      displayName,
      fullName,
      email,
      contactNumber,
      languagesKnown: languagesKnown || [],
      practiceCourts: practiceCourts || [],
      specialization: specialization || [],
      professionalBiography: professionalBiography || '',
      qualifications,
      profilePhoto,
    };

    let lawyer = await Lawyer.findOne({ userId: req.user.id });
    if (lawyer) {
      // Update existing profile
      lawyer = await Lawyer.findOneAndUpdate({ userId: req.user.id }, lawyerData, { new: true, runValidators: true });
    } else {
      // Create new profile
      lawyer = await Lawyer.create({ ...lawyerData, userId: req.user.id });
    }

    res.status(200).json({ message: 'Profile updated successfully', lawyer });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
};

// Get Lawyer Profile
exports.getProfile = async (req, res) => {
  try {
    const lawyer = await Lawyer.findOne({ userId: req.user.id }).select('-__v');
    if (!lawyer) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json(lawyer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};