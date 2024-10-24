// src/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or feedback, feel free to reach out to us!
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-600 mt-6 mb-2">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          Email: <a href="mailto:support@yourbooksite.com" className="text-blue-500">support@yourbooksite.com</a>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Phone: <strong>+1 234 567 890</strong>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We’d love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
