var express = require('express');
var router = express.Router();
var Todo = require('../../models/todos');

router.get('/', function(req, res) {
  Todo.findAsync({}, null, {sort: {"_id": 1}})
    .then(function(todos) {
      res.render('todos', {title: 'Todos', todos: todos});
    })
    .catch(console.error)
    .error(console.error);
});

module.exports = router;
