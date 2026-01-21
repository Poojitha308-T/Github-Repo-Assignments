let todos = [];
let nextId = 1;

export const getAllTodos = () => {
return todos;
};

export const getTodoById = (id) => {
return todos.find(todo => todo.id === Number(id));
};

export const createTodo = (title) => {
const newTodo = {
id: nextId++,
title,
completed: false
};

todos.push(newTodo);
return newTodo;
};

export const updateTodo = (id, data) => {
const todo = getTodoById(id);
if (!todo) return null;

todo.title = data.title ?? todo.title;
todo.completed = data.completed ?? todo.completed;

return todo;
};

export const deleteTodo = (id) => {
const index = todos.findIndex(todo => todo.id === Number(id));
if (index === -1) return false;

todos.splice(index, 1);
return true;
};