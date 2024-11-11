const express = require('express');
const router = express.Router();  // Initialize the router
const Survey = require('../models/survey');  // Ensure this is properly capitalized

// Route to display the home page
router.get('/', (req, res) => {
  res.render('home');  // Ensure you have a 'home.ejs' file in your 'views' folder
});

// Route to display the Negative Health Impacts page
router.get('/negative-impacts', (req, res) => {
  res.render('negative-impacts');  // Ensure you have a 'negative-impacts.ejs' file
});

// Route to display the Benefits of Sleeping page
router.get('/benefits', (req, res) => {
  res.render('benefits');  // Ensure you have a 'benefits.ejs' file
});

// Route to display the survey form
router.get('/survey', (req, res) => {
  res.render('survey');  // Ensure you have a 'survey.ejs' file for the survey form
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
