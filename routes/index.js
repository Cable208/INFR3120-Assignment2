
/*
 * INFR3120 - Assignment 2
 * Express Routes for Portfolio Website
 *
 * This file controls which EJS page is displayed
 * when a visitor opens a specific website URL.
 */

// Imports Express so the website can use its routing features
var express = require('express');

// Creates a router to organize the website's page routes
var router = express.Router();

// Home route displays index.ejs when the user visits /
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

// About route displays about.ejs when the user visits /about
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});

// Projects route displays projects.ejs when the user visits /projects
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});

// Contact route displays contact.ejs when the user visits /contact
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

// Exports the router so app.js can use these routes
module.exports = router;
