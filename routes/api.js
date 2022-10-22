import {Router} from 'express';
import bodyParser from 'body-parser';
import * as Controllers from '../controllers/todoController.js';

const router = Router();
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

//Get all the to-do's
router.get('/todos', Controllers.getAllTodos);

//Get one of the to-do's by ID
router.get('/todos/:id', Controllers.getTodoById );

//Add a new to-do
router.post('/todos', urlencodedParser, Controllers.addNewTodo);

//Edit one of the to-do's by ID
router.put('/todos/:id', urlencodedParser, Controllers.editTodo);

//Delete a to-do by id
router.delete('/todos/:id', Controllers.deleteTodo);

export default router