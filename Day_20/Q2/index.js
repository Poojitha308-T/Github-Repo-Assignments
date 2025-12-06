// Check if notes are saved in localStorage on page load
window.onload = function() {
    loadNotes();
};

// Function to save the notes to localStorage
function saveNotes() {
    const notesText = document.getElementById('notes').value;

    // Validate to ensure the note is not empty
    if (notesText.trim() === '') {
        alert('Note cannot be empty!');
        return;
    }

    // Save notes to localStorage
    localStorage.setItem('notes', notesText);
    alert('Notes saved!');
}

// Function to load saved notes from localStorage
function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notes').value = savedNotes;
    }
}

// Function to clear notes from localStorage
function clearNotes() {
    if (confirm('Are you sure you want to clear the notes?')) {
        localStorage.removeItem('notes');
        document.getElementById('notes').value = '';  // Clear the textarea
        alert('Notes cleared!');
    }
}

// Event listeners for the buttons
document.getElementById('saveBtn').addEventListener('click', saveNotes);
document.getElementById('loadBtn').addEventListener('click', loadNotes);
document.getElementById('clearBtn').addEventListener('click', clearNotes);