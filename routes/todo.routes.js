const router = require('express').Router();
const TodoController = require('../controller/todo.controller');

router.post('/storeTodo',TodoController.createToDo);
router.post('/getUserTodoList',TodoController.getUserTodo);

module.exports = router;