const express = require('express');

const app = express();

app.get('/currenttime', function(req, res) {
    res.send('<h1>' + new Date().toISOString() +'</h1>');
});

app.get('/', function(req, res) {
    res.send('<h1>Hello world !!</h1>');
    // res.send('<h1>Hello Word !</h1>');
});

app.listen(3000);




