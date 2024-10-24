import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BooksCollection from './BooksCollection'; // Import the BooksCollection component

// Sample book data (Old books)
const booksData = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    branch: "Computer Science",
    year: 1,
    image: "https://m.media-amazon.com/images/I/61ZYxrQEpCL._AC_UF1000,1000_QL80_.jpg",
    description: "A comprehensive introduction to the modern study of computer algorithms.",
  },
  {
    id: 2,
    title: "Computer Networking",
    author: "James Kurose",
    branch: "Information Technology",
    year: 2,
    image: "https://cdn11.bigcommerce.com/s-phtso/images/stencil/1024x1024/products/5834/7304/9781292405469-V1__47397.1634978736.jpg?c=2",
    description: "An in-depth exploration of networking principles, protocols, and technologies.",
  },
  {
    id: 3,
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    branch: "Computer Science",
    year: 3,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648666601i/60721505.jpg",
    description: "Fundamental concepts and techniques of database management systems.",
  },
  {
    id: 4,
    title: "Digital Electronics",
    author: "John M. Yarbrough",
    branch: "Electronics",
    year: 2,
    image: "https://rukminim1.flixcart.com/image/1408/1408/book/5/8/3/digital-logic-applications-and-design-original-imaey8hzyjrcj8ah.jpeg?q=90",
    description: "Introduction to digital electronics and logic design.",
  },
  {
    id: 5,
    title: "Microprocessor Architecture",
    author: "N. Senthil Kumar",
    branch: "Electronics",
    year: 3,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348540128i/10266249.jpg",
    description: "A guide to microprocessor design and architecture.",
  },
  {
    id: 6,
    title: "Operating System Concepts",
    author: "Abraham Silberschatz",
    branch: "Computer Science",
    year: 4,
    image: "https://m.media-amazon.com/images/I/51t52QCaxNL.jpg",
    description: "Detailed coverage of modern operating system design and implementation.",
  },
];

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [branch, setBranch] = useState(''); // State for branch filter
  const [year, setYear] = useState(''); // State for year filter
  const [addedBooks, setAddedBooks] = useState([]); // State for newly added books

  // Effect to fetch added books if you have a backend or local storage
  useEffect(() => {
    const fetchAddedBooks = () => {
      const storedBooks = JSON.parse(localStorage.getItem('addedBooks')) || [];
      setAddedBooks(storedBooks);
    };

    fetchAddedBooks();
  }, []);

  // Combine old and newly added books
  const allBooks = [...booksData, ...addedBooks];

  // Filter books based on search term, branch, and year
  const filteredBooks = allBooks.filter((book) => {
    const matchesTitleOrAuthor =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBranch = branch ? book.branch === branch : true; // Check branch if selected
    const matchesYear = year ? book.year.toString() === year : true; // Check year if selected

    return matchesTitleOrAuthor && matchesBranch && matchesYear;
  });

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Search Section */}
      <section className="py-6 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Search for Books</h2>
        <input
          type="text"
          placeholder="Search by title or author..."
          className="border border-blue-400 rounded-lg px-4 py-2 w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* Search by branch */}
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="border border-blue-400 rounded-lg px-4 py-2 mx-2"
        >
          <option value="">All Branches</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics">Electronics</option>
        </select>

        {/* Search by year */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-blue-400 rounded-lg px-4 py-2 mx-2"
        >
          <option value="">All Years</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </section>

      {/* Books Collection */}
      <BooksCollection books={filteredBooks} />

      {/* Add Book Section */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto text-center">
          <Link to="/add-book" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Add Your Own Book</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-blue-600 text-white text-center">
        {/* Removed copyright notice */}
      </footer>
    </div>
  );
};

export default Books;
