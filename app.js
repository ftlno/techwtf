var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.get('/hello', function(req, res) {
    res.send('Hello world');
});

app.listen(port, function() {
    console.log('app running at :' + port);
});
