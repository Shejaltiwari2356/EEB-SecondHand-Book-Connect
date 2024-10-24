// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import AddBook from './AddBook';
import BookDetail from './BookDetail';

const App = () => {
  // Initial book data with seller information and price
  const initialBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      branch: "Literature",
      year: "1925",
      description: "A novel about the American dream.",
      image: "https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg", // Reliable cover image
      sellerName: "Alice Johnson",
      sellerContact: "123-456-7890",
      price: "10.99", // Price in string format
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      branch: "Dystopian Fiction",
      year: "1949",
      description: "A dystopian novel set in a totalitarian society.",
      image: "https://www.gutenberg.org/cache/epub/37415/pg37415.cover.medium.jpg", // Reliable cover image
      sellerName: "Bob Smith",
      sellerContact: "098-765-4321",
      price: "15.50", // Price in string format
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      branch: "Classic Fiction",
      year: "1960",
      description: "A novel about racial injustice in the Deep South.",
      image: "https://www.gutenberg.org/cache/epub/18378/pg18378.cover.medium.jpg", // Reliable cover image
      sellerName: "Charlie Brown",
      sellerContact: "555-123-4567",
      price: "12.75", // Price in string format
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      branch: "Classic Literature",
      year: "1813",
      description: "A romantic novel that critiques the British landed gentry.",
      image: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg", // Reliable cover image
      sellerName: "David Wilson",
      sellerContact: "321-654-9870",
      price: "8.99", // Price in string format
    },
    {
      id: 5,
      title: "Moby Dick",
      author: "Herman Melville",
      branch: "Adventure Fiction",
      year: "1851",
      description: "The narrative of Captain Ahab's obsessive quest for revenge against the giant white whale, Moby Dick.",
      image: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg", // Reliable cover image
      sellerName: "Eve Adams",
      sellerContact: "222-333-4444",
      price: "14.50", // Price in string format
    },
  ];

  const [books, setBooks] = useState(initialBooks); // Initialize state with initial book data

  // Function to add a book to the collection
  const addBook = (book) => {
    setBooks((prevBooks) => [
      ...prevBooks, 
      { ...book, id: prevBooks.length + 1 } // Assign a unique id to each new book
    ]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} /> {/* Pass books to Books component */}
        <Route path="/add-book" element={<AddBook onAddBook={addBook} />} /> {/* Pass addBook function to AddBook */}
        <Route path="/books/:id" element={<BookDetail books={books} />} /> {/* Route for book detail */}
      </Routes>
    </Router>
  );
};

export default App;


