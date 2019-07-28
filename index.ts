const express = require('express');
const app = express();
const port = 3003;

app.get('/', function(req, res) {
    res.send("This is just a Git test that will be deleted later. :)");
});

app.get('/feature1', function(req, res) {
    // Noticed a bug and fixed it..
    res.send("Feature 1!");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});

// Main branch changed while working on feature 1 !!
// Main branch changed while working on bugfix 1 !!
// Bug fix 1 needs main branch changes before merging this time...