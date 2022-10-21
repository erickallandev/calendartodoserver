import {Router} from 'express';
import bodyParser from 'body-parser';

const router = Router();
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

//Get all the to-do's
router.get('/todos/', (req, res) => {

})

//Get one of the to-do's by ID
router.get('/todos/:id', (req, res) => {
    
})

//Add a new to-do
router.post('/todos', urlencodedParser, (req, res) => {
    
})

//Edit one of the to-do's by ID
router.put('/todos/:id', urlencodedParser, (req, res) => {
    
})

//Delete a to-do by id
router.delete('/todos/:id', (req, res) => {
    
})