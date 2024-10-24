import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Sample initial state for form fields
const initialBookState = {
  title: '',
  author: '',
  branch: 'Computer Science',
  year: 1,
  image: '',
  description: '',
  sellerName: '',  // New field for seller's name
  sellerContact: '', // New field for seller's contact
  price: '' // New field for book price
};

const AddBook = ({ onAddBook }) => {
  const [book, setBook] = useState(initialBookState);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setBook({ ...book, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(book); // Call the function to add book
    setBook(initialBookState); // Reset the form
    setImagePreview(null); // Reset the image preview
    navigate('/books'); // Navigate to Books Collection
  };

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

      {/* Add Book Form */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Add a New Book</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
          {/* Existing input fields */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Branch</label>
            <select
              name="branch"
              value={book.branch}
              onChange={handleChange}
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Electronics">Electronics</option>
              <option value="AIDS">AIDS</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Year</label>
            <select
              name="year"
              value={book.year}
              onChange={handleChange}
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            />
          </div>
          {imagePreview && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Image Preview:</h3>
              <img src={imagePreview} alt="Book Preview" className="w-1/2 h-auto mt-2 rounded-lg shadow-md" />
            </div>
          )}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={book.description}
              onChange={handleChange}
              required
              rows="4"
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            />
          </div>
          {/* New Seller Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Seller Name</label>
            <input
              type="text"
              name="sellerName"
              value={book.sellerName}
              onChange={handleChange}
              required
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            />
          </div>
          {/* New Seller Contact Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Seller Contact</label>
            <input
              type="text"
              name="sellerContact"
              value={book.sellerContact}
              onChange={handleChange}
              required
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            />
          </div>
          {/* New Price Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={book.price}
              onChange={handleChange}
              required
              className="border border-blue-400 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 w-full"
          >
            Add Book
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-blue-600 text-white text-center">
        <p>&copy; 2024 VESIT Book Connect. All rights reserved.</p>
        <Link to="/privacy" className="text-yellow-300 hover:underline">Privacy Policy</Link>
      </footer>
    </div>
  );
};

export default AddBook;

