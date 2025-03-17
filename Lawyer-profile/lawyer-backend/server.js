const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route');
const lawyerRoutes = require('./routes/lawyer.route');
const path = require('path');
const cors = require('cors')

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/lawyers', lawyerRoutes);

// Add to server.js
app.use(cors());

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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));