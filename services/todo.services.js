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

    static async deleteTodo(id){
        const deleted = await TodoModel.findOneAndDelete({_id:id})
        return deleted;
        
    };
}

module.exports = TodoServices;