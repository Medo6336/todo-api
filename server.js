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
        description: 'sleep',
        completed: false
    }
];

app.get('/', function (request, response) {
    response.send('todo-api root page');
});


app.get('/todos', function (request, response) {
    response.json(todos);
});

app.get('/todos/:id', function (request, response) {
    var todoId = parseInt(request.params.id, 10);
    var matchedTodo;
    todos.forEach(function (data) {
        if(data.id === todoId)
            matchedTodo = data;
    });

    if(matchedTodo)
        response.json(matchedTodo);
    else
        response.status(404).send();
});

app.listen(port, function () {
    console.log('todo-api running on port ' + port);
});