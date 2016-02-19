var express = require('express');
var app = express();
var path = require('path');


app.get('/', function (req, res) {
    res.sendFile(path.resolve('www/index.html'));
});

app.use(express.static(path.resolve('www')));
app.use(express.static(path.resolve('www/bower_components')));

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});