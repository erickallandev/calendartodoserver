import {Router} from 'express';
import bodyParser from 'body-parser';
import * as Controllers from '../controllers/todoController.js';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

const BASEURL = process.env.BASEURL;

//Get all the to-do's
router.get(`${BASEURL}/todos`, Controllers.getAllTodos);

//Get one of the to-do's by ID
router.get(`${BASEURL}/todos/:id`, Controllers.getTodoById );

//Add a new to-do
router.post(`${BASEURL}/todos`, urlencodedParser, Controllers.addNewTodo);

//Edit one of the to-do's by ID
router.put(`${BASEURL}/todos/:id`, urlencodedParser, Controllers.editTodo);

//Delete a to-do by id
router.delete(`${BASEURL}/todos/:id`, Controllers.deleteTodo);

export default router