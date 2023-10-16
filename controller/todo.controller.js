const TodoServices = require('../services/todo.services');

exports.createToDo = async(req,res,next)=>{
        try {
            const {userId,title,desc} = req.body;
            let todo = await TodoServices.createTodo(userId,title,desc);

            res.json({status:true,success:todo})
        } catch (e) {
            next(e);
        }
}

exports.getUserTodo = async(req,res,next)=>{
    try {
        const {userId} = req.body;
        let todo = await TodoServices.getTododata(userId);

        res.json({status:true,success:todo})
    } catch (e) {
        next(e);
        satisfies
    }
}