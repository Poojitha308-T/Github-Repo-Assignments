import { Router } from 'express';
import {
getTodos,
getTodo,
addTodo,
editTodo,
removeTodo
} from '../controllers/todo.controller.js';

const router = Router();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', addTodo);
router.put('/:id', editTodo);
router.delete('/:id', removeTodo);

export default router;