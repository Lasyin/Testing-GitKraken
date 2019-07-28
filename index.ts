const express = require('express');
const app = express();
const port = 3003;

app.get('/', function(req, res) {
    res.send("This is just a Git test that will be deleted later. :)");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});