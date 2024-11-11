
// Routes for the Sleep Tracking Survey Site
const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('home', { title: 'Sleep Tracking Survey' });
});

// Negative Health Impacts route
router.get('/negative-impacts', (req, res) => {
    res.render('negative-impacts', { title: 'Negative Health Impacts of Poor Sleep' });
});

// Benefits of Sleeping route
router.get('/benefits', (req, res) => {
    res.render('benefits', { title: 'Benefits of Sleeping' });
});

// Sleep Tracking Survey route
router.get('/survey', (req, res) => {
    res.render('survey', { title: 'How Many Hours of Sleep Do You Get?' });
});

module.exports = router;
