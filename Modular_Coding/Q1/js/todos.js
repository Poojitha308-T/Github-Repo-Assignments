import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { displayTodos } from './displayTodos.js';

document.getElementById("navbar").innerHTML = createNavbar();
document.getElementById("footer").innerHTML = createFooter();

// Ensure user is logged in before displaying todos
const loggedInUser = localStorage.getItem('user');

if (!loggedInUser) {
  alert('You must be logged in to view your todos!');
  window.location.href = "login.html";
} else {
  // Fetch todos from the API
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => displayTodos(data))
    .catch(err => console.error('Error fetching todos:', err));
}