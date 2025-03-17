const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/protectRoute');
const { updateProfile, getProfile } = require('../controllers/lawyer.controller');
const multer = require('multer');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: './uploads/qualifications/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Profile routes
router.put('/profile', protectRoute, upload.fields([{ name: 'qualifications', maxCount: 5 }, { name: 'profilePhoto', maxCount: 1 }]), updateProfile);
router.get('/profile', protectRoute, getProfile);

module.exports = router;