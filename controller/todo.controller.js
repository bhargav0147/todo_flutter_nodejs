const TodoServices = require('../services/todo.services');

exports.createToDo = async (req, res, next) => {
    try {
        const { userId, title, desc } = req.body;
        let todo = await TodoServices.createTodo(userId, title, desc);

        res.json({ status: true, success: todo })
    } catch (e) {
        next(e);
    }
}

exports.getUserTodo = async (req, res, next) => {
    try {
        const { userId } = req.body;
        let todo = await TodoServices.getTododata(userId);

        res.json({ status: true, success: todo })
    } catch (e) {
        next(e);
        satisfies
    }

    exports.deleteTodo = async (req, res, next) => {
        try {
            const { id } = req.body;
            let deleted = await TodoServices.deleteTodo(userId);

            res.json({ status: true, success: deleted })
        } catch (e) {
           throw e;
        }
    }
}