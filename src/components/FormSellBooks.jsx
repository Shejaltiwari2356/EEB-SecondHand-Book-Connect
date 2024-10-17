import React, { useState } from "react";

const SellBooks = () => {
  const [bookDetails, setBookDetails] = useState({
    name: "",
    year: "",
    branch: "",
    book: "",
    price: "",
    contact: "",
    description: "",
    image: null, // Change to null for file input
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if the file is a PNG image
    if (file && file.type === "image/png") {
      setBookDetails({ ...bookDetails, image: file });
    } else {
      alert("Please upload a PNG image.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookDetails);

    // Add code to handle the image file upload, e.g., using FormData
    const formData = new FormData();
    formData.append("image", bookDetails.image);
    Object.entries(bookDetails).forEach(([key, value]) => {
      if (key !== "image") {
        formData.append(key, value);
      }
    });

    // You can replace the following line with your code to send formData to your backend or database
    console.log("Form Data Submitted:", formData);

    alert("Book details submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sell Your Book</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={bookDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Year: </label>
          <input
            type="number"
            name="year"
            value={bookDetails.year}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Branch: </label>
          <input
            type="text"
            name="branch"
            value={bookDetails.branch}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Book: </label>
          <input
            type="text"
            name="book"
            value={bookDetails.book}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Price (₹): </label>
          <input
            type="number"
            name="price"
            value={bookDetails.price}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Contact: </label>
          <input
            type="text"
            name="contact"
            value={bookDetails.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Description: </label>
          <textarea
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Image (PNG only): </label>
          <input
            type="file"
            name="image"
            accept="image/png" // Restrict to PNG files
            onChange={handleFileChange}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellBooks;
