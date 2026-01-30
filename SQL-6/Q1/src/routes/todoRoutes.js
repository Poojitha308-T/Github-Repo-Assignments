import express from 'express';
import { body, param, validationResult } from 'express-validator';
import {
  addTodo,
  getMyTodos,
  updateTodo,
  deleteTodo
} from '../controllers/todoController.js';

const router = express.Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post(
  '/add-todo',
  [
    body('title').notEmpty().withMessage('Title required'),
    body('userId').isUUID().withMessage('Valid userId required')
  ],
  validate,
  addTodo
);

router.get(
  '/get-my-todo/:userId',
  [param('userId').isUUID().withMessage('Invalid userId')],
  validate,
  getMyTodos
);

router.put(
  '/update-todo/:todoId',
  [param('todoId').isUUID().withMessage('Invalid todoId')],
  validate,
  updateTodo
);

router.delete(
  '/delete-todo/:todoId',
  [param('todoId').isUUID().withMessage('Invalid todoId')],
  validate,
  deleteTodo
);

export default router;
