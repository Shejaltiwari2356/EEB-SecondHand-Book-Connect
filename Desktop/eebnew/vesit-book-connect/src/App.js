// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import About from './About'; // Import the About component
import Contact from './Contact'; // Import the Contact component

const App = () => {
  // Initial book data with seller information and price
  const initialBooks = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      branch: "Computer Science",
      year: 1,
      description: "A comprehensive introduction to the modern study of computer algorithms.",
      image: "https://m.media-amazon.com/images/I/61ZYxrQEpCL._AC_UF1000,1000_QL80_.jpg", // Reliable cover image
      sellerName: "Alice Johnson",
      sellerContact: "123-456-7890",
      price: "10.99", // Price in string format
    },
    {
      id: 2,
      title: "Computer Networking",
      author: "James Kurose",
      branch: "Information Technology",
      year: 2,
      description: "An in-depth exploration of networking principles, protocols, and technologies.",
      image: "https://cdn11.bigcommerce.com/s-phtso/images/stencil/1024x1024/products/5834/7304/9781292405469-V1__47397.1634978736.jpg?c=2", // Reliable cover image
      sellerName: "Bob Smith",
      sellerContact: "098-765-4321",
      price: "15.50", // Price in string format
    },
    {
      id: 3,
      title: "Database System Concepts",
      author: "Abraham Silberschatz",
      branch: "Computer Science",
      year: 3,
      description: "Fundamental concepts and techniques of database management systems.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648666601i/60721505.jpg", // Reliable cover image
      sellerName: "Charlie Brown",
      sellerContact: "555-123-4567",
      price: "12.75", // Price in string format
    },
    {
      id: 4,
      title: "Digital Electronics",
      author: "John M. Yarbrough",
      branch: "Electronics",
      year: 2,
      description: "Introduction to digital electronics and logic design.",
      image: "https://rukminim1.flixcart.com/image/1408/1408/book/5/8/3/digital-logic-applications-and-design-original-imaey8hzyjrcj8ah.jpeg?q=90", // Reliable cover image
      sellerName: "David Wilson",
      sellerContact: "321-654-9870",
      price: "8.99", // Price in string format
    },
    {
      id: 5,
      title: "Microprocessor Architecture",
      author: "N. Senthil Kumar",
      branch: "Electronics",
      year: 3,
      description: "A guide to microprocessor design and architecture.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348540128i/10266249.jpg", // Reliable cover image
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
        <Route path="/about" element={<About />} /> {/* Route for About page */}
        <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
      </Routes>
    </Router>
  );
};

export default App;

