// PORT
const PORT = process.env.PORT || 4000;

// Dependencies
const express = require('express');
const cors = require('cors');

// JSON Files
const about = require('./about.json');
const projects = require('./projects.json');
const contact = require('./contact.json');

// App Object
const app = express();

// Middleware
app.use(cors());

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// About Route
app.get('/about', (req, res) => {
    res.json(about);
});

// Projects Route
app.get('/projects', (req, res) => {
    res.json(projects);
});

// Contact Route
app.get('/contact', (req, res) => {
    res.json(contact);
});

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});