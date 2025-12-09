
const firebaseConfig = {
  apiKey: "AIzaSyAjzkkpq6B3NEv-g-YvO05sMMjPhBxn9C4",
  authDomain: "book-management-app-1cbc2.firebaseapp.com",
  projectId: "book-management-app-1cbc2",
  storageBucket: "book-management-app-1cbc2.firebasestorage.app",
  messagingSenderId: "593360240420",
  appId: "1:593360240420:web:03207195aece910bf9fdb1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


function renderBooks() {
  db.collection('books').onSnapshot((snapshot) => {
    const container = document.getElementById('booksContainer');
    container.innerHTML = ''; 

    snapshot.forEach((doc) => {
      const book = doc.data();

      const card = document.createElement('div');
      card.className = 'book-card';

      card.innerHTML = `
        <img src="${book.coverImageURL}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Price: $${book.price}</p>
        <button onclick="updateAuthor('${doc.id}')">Update Author</button>
        <button onclick="deleteBook('${doc.id}')">Delete</button>
        <button onclick="viewDetails('${doc.id}')">View Details</button>
      `;

      container.appendChild(card);
    });
  });
}


document.getElementById('addBookForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const price = parseFloat(document.getElementById('price').value);
  const coverImageURL = document.getElementById('coverImageURL').value;

  try {
    await db.collection('books').add({
      title,
      author,
      price,
      coverImageURL
    });

    e.target.reset();  // Clear form
  } catch (error) {
    console.error("Error adding book:", error);
  }
});


async function updateAuthor(id) {
  const newAuthor = prompt("Enter new author name:");

  if (newAuthor && newAuthor.trim()) {
    try {
      await db.collection("books").doc(id).update({
        author: newAuthor.trim()
      });
    } catch (error) {
      console.error("Error updating author:", error);
    }
  }
}


async function deleteBook(id) {
  if (confirm("Are you sure you want to delete this book?")) {
    try {
      await db.collection("books").doc(id).delete();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }
}

async function viewDetails(id) {
  try {
    const doc = await db.collection("books").doc(id).get();

    if (doc.exists) {
      const book = doc.data();
      alert(
        `Title: ${book.title}\nAuthor: ${book.author}\nPrice: $${book.price}\nImage URL: ${book.coverImageURL}`
      );
    }
  } catch (error) {
    console.error("Error fetching details:", error);
  }
}

async function addDummyBooks() {
  const dummyBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 12.99,
      coverImageURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlT9H7Y4GcarArOYJKNtyQbamq9Tpq2t43iko0szGkQKI7VGyQ9bUjiMN7Of81zXctqYuDg-8e-z3ghlp8nYurf2hUL6u1mQ"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 10.49,
      coverImageURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZTm3klyWhvchbyupltHxdEiOLtA-FaXyEDkhAQ-5H5wkp2cDMP7ul_kx8ECo_K8UfCQwzRrPjPJT2TTZ20-GkO8AW_DtG_J-PhsgAgrT0JpzYDcXeb9t3"
    },
    {
      title: "1984",
      author: "George Orwell",
      price: 9.99,
      coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 14.99,
      coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 11.50,
      coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
    }
  ];

  try {
    for (const book of dummyBooks) {
      await db.collection("books").add(book);
    }
    console.log("Dummy books added!");
  } catch (error) {
    console.error("Error adding dummy books:", error);
  }
}


// Start App
renderBooks();
