export function displayTodos(data) {
  const todosContainer = document.getElementById("todos-list");
  todosContainer.innerHTML = '';

  data.forEach(todo => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo-item');
    todoElement.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? 'Completed' : 'Pending'}</p>
    `;
    todosContainer.appendChild(todoElement);
  });
}