// src/components/BookDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div className="text-red-500 text-center mt-4">Book not found</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <img
        src={book.image}
        alt={`Cover of ${book.title}`}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
      <p className="text-gray-700 mb-2"><strong>Branch:</strong> {book.branch}</p>
      <p className="text-gray-700 mb-2"><strong>Year:</strong> {book.year}</p>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {book.description}</p>
      <p className="text-gray-700 mb-2"><strong>Seller:</strong> {book.sellerName}</p>
      <p className="text-gray-700 mb-2"><strong>Contact:</strong> {book.sellerContact}</p>
      <p className="text-gray-700 mb-2">
        <strong>Price:</strong> ${parseFloat(book.price).toFixed(2)} {/* Convert to number and format */}
      </p>
    </div>
  );
};

export default BookDetail;





