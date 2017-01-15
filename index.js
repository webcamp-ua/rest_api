var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./routes/api');

app.use(bodyParser.json());
app.use('/api', api);
app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});