

const express = require('express');

const app = express();

app.get('/', function(req, res) {
    console.log(req);
    res.send("<h1>hello</h1>");
})

app.get("/contact", function(req, res) {
    res.send("<h1>Contact me at: Your Mom's House</h1>");
})

app.get("/about", function(req, res) {
    res.send("<h1>Hello, my name is Zach and I'm a full stack software engineer!</h1>");
})

app.get("/hobbies", function(req, res) {
    res.send("<h1>Hobbies include: baseball, beer, beach stuff</h1>")
})

app.listen(3000, function () {
    console.log('listening on port 3000');
});