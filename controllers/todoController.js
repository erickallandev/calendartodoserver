import Todo from '../models/todo.js';

export const getAllTodos = async (req, res) => {
    let todos = await Todo.findAll();
    res.json({todos});
}

export const getTodoById = async (req, res) => {
    let id = req.params.id;
    let todo = await Todo.findByPk(id);

    res.json(todo);
}

export const addNewTodo = async (req, res) => {
    if(req.body.title) {
        const newTodo = await Todo.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            timestart: req.body.timestart,
            timeend: req.body.timeend
        });
        res.status(201).json(newTodo);
    } else {
        res.json({error: 'Ocorreu um erro ao adicionar a nova atividade. Por favor, tente novamente.'});
    }
}

export const editTodo = async (req, res) => {
    let id = req.params.id;
    let todo = await Todo.findByPk(id);

    if(todo) {
        
        if(req.body.title) {
            todo.title = req.body.title
        }

        if(req.body.description) {
            todo.description = req.body.description
        }
        if(req.body.date) {
            todo.date = req.body.date
        }
        if(req.body.timestart) {
            todo.timestart = req.body.timestart
        }
        if(req.body.timeend) {
            todo.timeend = req.body.timeend
        }

        await todo.save();
        res.json({todo});

    } else {
        res.json({error: 'Ocorreu um erro ao editar a atividade. Por favor, tente novamente.'})
    }
}

export const deleteTodo = async (req, res) => {
    let id = req.params.id;
    let todo = await Todo.findByPk(id);

    todo ? todo.destroy() : res.json({});
}