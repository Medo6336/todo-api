/**
 * Created by Medo on 5/15/2016.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 6336;


app.get('/', function (request, response) {
    response.send('todo-api root page');
});

app.listen(port, function () {
    console.log('todo-api running on port ' + port);
});