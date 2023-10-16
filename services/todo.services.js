const TodoModel = require('../model/todo.model');

class TodoServices{
    static async createTodo(userId,title,desc){
        const createtodo = new TodoModel({userId,title,desc});
        return await createtodo.save();
        
    };

    static async getTododata(userId){
        const tododata = await TodoModel.find({userId})
        return tododata;
        
    };
}

module.exports = TodoServices;