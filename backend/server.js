// PORT
const PORT = process.env.PORT || 4000;

// Dependencies
const express = require('express');
const cors = require('cors');

// JSON Files
const projects = require('./projects.json');
const about = require('./about.json');

// App Object
const app = express();

// Middleware
app.use(cors());

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Projects Route
app.get('/projects', (req, res) => {
    res.json(projects);
});

// About Route
app.get('/about', (req, res) => {
    res.json(about);
});

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});