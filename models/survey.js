const mongoose = require('mongoose');

// Define a Schema for survey responses
const surveySchema = new mongoose.Schema({
  hours: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Create a model based on the schema
const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
