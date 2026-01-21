import {
getAllTodos,
getTodoById,
createTodo,
updateTodo,
deleteTodo
} from '../models/todo.model.js';

export const getTodos = (req, res, next) => {
try {
res.status(200).json(getAllTodos());
} catch (error) {
next(error);
}
};

export const getTodo = (req, res, next) => {
try {
const todo = getTodoById(req.params.id);

if (!todo) {
return res.status(404).json({ message: 'Todo not found' });
}
res.status(200).json(todo);
} catch (error) {
next(error);
}
};

export const addTodo = (req, res, next) => {
try {
const { title } = req.body;

if (!title) {
return res.status(400).json({ message: 'Title is required' });
}

const todo = createTodo(title);
res.status(201).json(todo);
} catch (error) {
next(error);
}
};

export const editTodo = (req, res, next) => {
try {
    const todo = updateTodo(req.params.id, req.body);

if (!todo) {
return res.status(404).json({ message: 'Todo not found' });
}

res.status(200).json(todo);
} catch (error) {
next(error);
}
};

export const removeTodo = (req, res, next) => {
try {
const success = deleteTodo(req.params.id);

if (!success) {
return res.status(404).json({ mesage: 'Todo not found' });
}

res.status(204).send();
} catch (error) {
next(error);
}
};