
/*
 * INFR3120 - Assignment 2
 * Main Express Application Configuration
 *
 * This file sets up the Express server, connects
 * the website routes, and handles errors.
 */

// Imports modules needed for the Express application
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Imports the routes used for the website pages
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Creates the Express application
var app = express();

// Sets the location of the EJS view templates
app.set('views', path.join(__dirname, 'views'));

// Sets EJS as the template engine for displaying pages
app.set('view engine', 'ejs');

// Logs HTTP requests to help with debugging
app.use(logger('dev'));

// Allows Express to understand JSON request data
app.use(express.json());

// Allows Express to understand form data
app.use(express.urlencoded({ extended: false }));

// Reads cookies sent by the visitor's browser
app.use(cookieParser());

// Makes CSS, JavaScript, images and videos
// in the public folder accessible to visitors
app.use(express.static(path.join(__dirname, 'public')));

// Connects the portfolio's page routes to the website
app.use('/', indexRouter);

// Connects the default users route created by Express Generator
app.use('/users', usersRouter);

// Creates a 404 error if no route matches the requested URL
app.use(function(req, res, next) {
    next(createError(404));
});

// Handles errors and displays the error page
app.use(function(err, req, res, next) {

    // Makes the error message available to the EJS template
    res.locals.message = err.message;

    // Shows detailed errors only in development mode
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Sets the HTTP response status
    res.status(err.status || 500);

    // Displays the error.ejs template
    res.render('error');
});

// Exports the app so the server startup file can use it
module.exports = app;
