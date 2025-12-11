import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.getElementById("navbar").innerHTML = createNavbar();
document.getElementById("footer").innerHTML = createFooter();

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = { username, password };
  
  // Save user details in localStorage
  localStorage.setItem('user', JSON.stringify(user));

  alert('Signup successful! You can now log in.');
  window.location.href = "login.html";
});