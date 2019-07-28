var express = require('express');
var app = express();
var port = 3003;
app.get('/', function (req, res) {
    res.send("This is just a Git test that will be deleted later. :)");
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
