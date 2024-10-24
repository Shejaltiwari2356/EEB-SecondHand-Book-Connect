import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Our Book Haven</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>Vesit-book-connect</strong>, where our passion for books meets a commitment to fostering a love for learning. 
          Our mission is to provide a user-friendly platform for readers, students, and book enthusiasts to find the resources they need to thrive.
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-600 mt-6 mb-2">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-4">
          We believe in the transformative power of literature and knowledge. Our goal is to make quality educational resources accessible to everyone, 
          whether you’re diving into a specific subject or exploring new ideas.
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-600 mt-6 mb-2">Why Choose Our Platform?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Diverse Selection:</strong> We offer a curated collection of books across various disciplines to cater to all readers.</li>
          <li><strong>User-Friendly Experience:</strong> Our intuitive website allows easy searches by title, author, branch, and year.</li>
          <li><strong>Community Engagement:</strong> Join fellow readers in sharing reviews and recommendations.</li>
          <li><strong>Commitment to Quality:</strong> We continuously update our collection to ensure you have access to the best resources.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-blue-600 mt-6 mb-2">Join Us in Exploring Knowledge</h2>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for visiting our platform! We invite you to explore the world of books with us and discover the endless possibilities that knowledge brings.
        </p>

        <h2 className="text-3xl font-semibold text-blue-600 mt-6 mb-2">Created By</h2>
        <p className="text-lg text-gray-700 mb-4">
          This platform is created by: <strong>Vesit-Student-Team</strong>
        </p>
      </div>
    </div>
  );
};

export default About;

