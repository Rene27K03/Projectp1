const express = require('express');
const router = express.Router();  // Initialize the router
const Survey = require('../models/survey');  // Make sure the file name is correctly capitalized

// Route to display the survey form
router.get('/survey', (req, res) => {
  res.render('survey');  // Render your survey form
});

// Route to handle the form submission
router.post('/submit-survey', async (req, res) => {
  try {
    console.log('Received data:', req.body);  // Log the incoming data

    // Create a new survey response from the submitted form data
    const newSurvey = new Survey({
      hours: req.body.hours  // Get the hours from the form input
    });

    // Save the survey response to the database
    await newSurvey.save();

    // Respond with a success message
    res.send('Thank you for submitting your survey response!');
  } catch (err) {
    console.log('Error:', err);  // Log any error
    res.status(500).send('Failed to save your response');
  }
});

// Route to display all survey results
router.get('/survey-results', async (req, res) => {
  try {
    // Fetch all survey responses from the database
    const surveys = await Survey.find();
    // Render the survey-results page and pass the survey data
    res.render('survey-results', { surveys: surveys });
  } catch (err) {
    console.log('Error:', err);
    res.status(500).send('Failed to load survey results');
  }
});

// Export the router so it can be used in server.js
module.exports = router;