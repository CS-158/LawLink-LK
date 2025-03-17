const express = require('express');
const router = express.Router();

// Example route (replace with your actual routes)
router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router; // Ensure this exports the router directly