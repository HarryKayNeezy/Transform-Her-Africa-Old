const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/courses.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/courses.html'));
});

app.get('/contact.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/contact.html'));
});

app.get('/testimonials.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/testimonials.html'));
});

app.listen(3000, console.log('server is listening'));