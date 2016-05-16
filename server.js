/**
 * Created by Medo on 5/15/2016.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 6336;


var todos = [
    {
        id: 1,
        description: 'eat',
        completed: false
    },
    {
        id: 2,
        description: 'drink water',
        completed: true
    },
    {
        id: 3,
        description: 'wiggle',
        completed: false
    }
];

app.get('/', function (request, response) {
    response.send('todo-api root page');
});


app.get('/todos', function (request, response) {
    response.json(todos);
});

app.listen(port, function () {
    console.log('todo-api running on port ' + port);
});