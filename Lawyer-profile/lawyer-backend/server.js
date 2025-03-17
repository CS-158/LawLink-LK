const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route');
const lawyerRoutes = require('./routes/lawyer.route');
const path = require('path');
const cors = require('cors');

dotenv.config();

// Debug: Log the MONGO_URI with a newline to avoid interference
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('------------------------'); // Separator

const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/lawyers', lawyerRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('./uploads/qualifications')) {
  fs.mkdirSync('./uploads/qualifications', { recursive: true });
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle port conflict
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is in use, trying port ${PORT + 1}...`);
    app.listen(PORT + 1, () => console.log(`Server running on port ${PORT + 1}`));
  } else {
    console.error('Server error:', err);
  }
});