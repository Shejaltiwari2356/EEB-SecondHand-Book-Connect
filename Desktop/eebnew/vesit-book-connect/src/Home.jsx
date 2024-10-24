// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-blue-50">
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

      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-700 opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
          <h1 className="text-6xl font-extrabold">Welcome to VESIT Book Connect</h1>
          <p className="mt-4 text-xl">Connecting students with the best resources!</p>
          <Link to="/books">
            <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded transition transform hover:scale-105">
              Browse Books
            </button>
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-4 text-blue-600">
            VESIT Book Connect is dedicated to facilitating the exchange of engineering textbooks.
            Whether you're selling or buying, we provide a user-friendly platform tailored for students.
          </p>
          <img src="/images/about.jpg" alt="About Us" className="mx-auto mb-4 rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Featured Books</h2>
        <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 min-w-[250px] transition-transform hover:shadow-xl">
              <img src={`/images/book${index + 1}.jpg`} alt={`Book ${index + 1}`} className="h-48 w-full object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 text-blue-600">Book Title {index + 1}</h3>
              <p className="text-blue-600">Author: Author {index + 1}</p>
              <p className="text-blue-600">Branch: Branch {index + 1}</p>
              <p className="text-blue-600">Year: {index + 1}</p>
              <Link to={`/books/${index + 1}`} className="mt-4 text-blue-600 hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {['CS', 'IT', 'AIDS', 'Electronics'].map((category, index) => (
            <div key={index} className="bg-blue-100 rounded-lg p-4 shadow-md text-center transition-transform hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-600">{category} Books</h3>
              <Link to={`/books?branch=${category}`} className="mt-2 inline-block bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition">View {category}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {['User A', 'User B', 'User C'].map((user, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <p className="italic text-blue-600">“This platform is a lifesaver! I found all the books I needed.”</p>
              <p className="font-bold mt-2 text-blue-600">{user}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Latest Articles</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-blue-100 rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">Article Title {index + 1}</h3>
              <p className="mt-2 text-blue-600">Brief description of the article goes here...</p>
              <Link to={`/blog/${index + 1}`} className="text-blue-600 hover:underline">Read more</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Contact Us</h2>
        <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-blue-600" htmlFor="name">Name:</label>
            <input type="text" id="name" className="w-full p-2 border border-blue-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-blue-600" htmlFor="email">Email:</label>
            <input type="email" id="email" className="w-full p-2 border border-blue-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-blue-600" htmlFor="message">Message:</label>
            <textarea id="message" rows="4" className="w-full p-2 border border-blue-300 rounded" required></textarea>
          </div>
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Send Message</button>
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

export default Home;
