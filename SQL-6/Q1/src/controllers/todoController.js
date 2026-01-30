import {
  createTodo,
  getTodosByUser,
  getTodoById,
  updateTodoById,
  deleteTodoById
} from '../services/todoService.js';
import { findUserById } from '../services/userService.js';

export const addTodo = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const { data: user } = await findUserById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { data, error } = await createTodo({
      title,
      description,
      userr_id: userId   
    });

    if (error) throw error;

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyTodos = async (req, res) => {
  try {
    const { userId } = req.params;

    const { data: user } = await findUserById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { data, error } = await getTodosByUser(userId);
    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const { data: existing } = await getTodoById(todoId);
    if (!existing) return res.status(404).json({ message: 'Todo not found' });

    const { title, description, is_completed } = req.body;

    const { data, error } = await updateTodoById(todoId, {
      title,
      description,
      is_completed
    });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const { data: existing } = await getTodoById(todoId);
    if (!existing) return res.status(404).json({ message: 'Todo not found' });

    await deleteTodoById(todoId);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
