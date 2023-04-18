

const express = require('express');

const app = express();

app.get('/', function(req, res) {
    console.log(req);
    res.send("<h1>hello</h1>");
})

app.listen(3000, function () {
    console.log('listening on port 3000');
});