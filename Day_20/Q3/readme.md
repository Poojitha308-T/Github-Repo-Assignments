A simple, modern, and fully interactive Todo List built with HTML, CSS, and JavaScript.
This application allows users to add tasks, mark them as completed, delete them, and search through tasks in real time.
All tasks are saved in localStorage so they persist across page reloads.
 How to use this application:
 Follow these steps to use the Enhanced Todo List App:-
 
 1. Add a New Task
Type your task into the “Enter a new task…” input field.
Click the Add Task button.
The task will appear instantly in the list below.

2. Mark a Task as Completed
Each task has a checkbox on the left.
Click the checkbox to toggle between completed and not completed.
Completed tasks appear with a strikethrough in a gray text.
Your completion status is saved permanently using localStorage.

3. Delete a Task
Each task includes a Delete button on the right.
Click it to remove the task from the list.
It will also be completely removed from localStorage.

4. Search for Tasks (Real-Time Filtering)
Use the Search tasks… bar to filter tasks as you type.
Tasks that do not match your search will fade out (hidden).
Clearing the search field will show all tasks again.
This search feature updates instantly with every keystroke.

5. Task Persistence (localStorage)
All tasks are stored in the browser’s localStorage as a JSON array.
Tasks remain saved even after refreshing the page and also after closing the browser.
Completed status is preserved.

6. Clearing Input Fields
After adding a task, the input field clears automatically.
To reset the search filter, simply delete the text in the search bar.

Technologies Used :
HTML5 — structure
CSS3 — styling and layout
JavaScript (ES6+) — logic, rendering, localStorage handling
localStorage API — data persistence