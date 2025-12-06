// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

// Load tasks on page load
window.onload = loadTasks;

// Add task button click
addTaskBtn.addEventListener("click", addTask);

// Search tasks in real time
searchInput.addEventListener("input", searchTasks);

// Load Tasks
function loadTasks() {
    const tasks = getTasksFromStorage();
    tasks.forEach(task => renderTask(task));
}

// Add Task
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Task cannot be empty");
        return;
    }

    const task = {
        id: Date.now(),
        text,
        completed: false
    };

    const tasks = getTasksFromStorage();
    tasks.push(task);
    saveTasksToStorage(tasks);

    renderTask(task);

    taskInput.value = "";
}

// Render a Task in the UI
function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => toggleComplete(task.id));

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
        span.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

// Toggle Completed Status
function toggleComplete(id) {
    const tasks = getTasksFromStorage();
    const task = tasks.find(t => t.id === id);
    task.completed = !task.completed;
    saveTasksToStorage(tasks);

    // Update UI
    taskList.innerHTML = "";
    loadTasks();
}

// Delete Task
function deleteTask(id) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(t => t.id !== id);
    saveTasksToStorage(tasks);

    // Update UI
    document.querySelector(`li[data-id = "${id}"]`).remove();
}

// Search Tasks
function searchTasks() {
    const query = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(li => {
        const text = li.querySelector("span").textContent.toLowerCase();
        li.style.display = text.includes(query) ? "flex" : "none";
    });
}

// Storage Helpers
function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}