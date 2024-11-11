// Main entry file for the Express application
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');  // Import mongoose for MongoDB connection
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/surveyDB', {
  useNewUrlParser: true,  // Avoid deprecation warnings
  useUnifiedTopology: true  // Avoid deprecation warnings
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
