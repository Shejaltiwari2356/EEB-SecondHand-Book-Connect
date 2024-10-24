// src/components/BooksCollection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BooksCollection = ({ books }) => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-3xl font-bold">VESIT Book Connect</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/books" className="hover:text-yellow-300">Books</Link>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
            <Link to="/add-book" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Add Book</Link>
          </div>
        </div>
      </nav>

      {/* Books Collection */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Books Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p className="text-gray-700">Author: {book.author}</p>
                <p className="text-gray-700">Branch: {book.branch}</p>
                <p className="text-gray-700">Year: {book.year}</p>
                <Link
                  to={`/books/${book.id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2 block text-center"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No books added yet. Please add a book!</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-blue-600 text-white text-center">
        <p>&copy; 2024 VESIT Book Connect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BooksCollection;
