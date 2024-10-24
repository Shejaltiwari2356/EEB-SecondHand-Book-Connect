// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">VESIT Book Connect</h1>
        <ul className="flex space-x-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li>
            <Link to="#" className="relative group">
              Branches
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg text-black mt-2">
                <Link to="/books?branch=CS" className="block px-4 py-2 hover:bg-gray-200">Computer Science</Link>
                <Link to="/books?branch=IT" className="block px-4 py-2 hover:bg-gray-200">Information Technology</Link>
                <Link to="/books?branch=AIDS" className="block px-4 py-2 hover:bg-gray-200">AIDS</Link>
                <Link to="/books?branch=Electronics" className="block px-4 py-2 hover:bg-gray-200">Electronics</Link>
              </div>
            </Link>
          </li>
          <li><Link to="/add-book">Add Book</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


