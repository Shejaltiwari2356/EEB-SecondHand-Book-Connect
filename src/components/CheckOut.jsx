import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const CheckOut = () => {
  const location = useLocation();
  const { student } = location.state || {}; // Accessing student data from location state
  const navigate = useNavigate();
  if (!student) {
    return <div>No student data available.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout Details</h1>
      <h2>Name: {student.name}</h2>
      <p>Year: {student.year}</p>
      <p>Branch: {student.branch}</p>
      <p>Book: {student.book}</p>
      <p>Price: ₹{student.price}</p>
      <p>Contact: {student.contact}</p>
      <p>Description: {student.description}</p>
      <p>
        Image:
        <img
          src={student.image}
          alt={student.book}
          style={{ width: "150px", height: "auto" }} // Adjust the size as needed
        />
      </p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default CheckOut;
