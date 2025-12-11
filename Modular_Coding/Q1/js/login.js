import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.getElementById("navbar").innerHTML = createNavbar();
document.getElementById("footer").innerHTML = createFooter();

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    // Redirect to Todos page after successful login
    window.location.href = "todos.html";
  } else {
    alert("Invalid login credentials. Please try again.");
  }
});