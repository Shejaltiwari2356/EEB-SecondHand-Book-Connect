import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({
  _id, // Add product id prop
  name,
  image,
  images,
  rating,
  bought,
  offerprice,
  originalprice,
  description,
  ratedby,
  brand,
  cellulartechnology,
  os,
  ram,
  display,
  rom,
  processorspeed,
  battery,
  discount,
  about,
}) => {
  const [selectedImage, setSelectedImage] = useState(image);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Retrieve token from local storage

  const handleAddToCart = async () => {
    if (!token) {
      alert("You must be logged in to add items to the cart.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5001/api/cart/add",
        {
          productId: _id,
          quantity: 1, // Default quantity
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the request headers
          },
        }
      );

      console.log("Add to Cart Response:", response.data);

      if (response.status === 200 && response.data) {
        alert("Item added to cart successfully!");
        navigate("/cart"); // Redirect to Cart page after adding to cart
      } else {
        alert("Failed to add item to the cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      setError("An error occurred while adding the item to the cart.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-detail-container">
      <div className="image-gallery">
        <div className="thumbnail-list">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className={selectedImage === img ? "active-thumbnail" : ""}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={selectedImage} alt={name} />
        </div>
      </div>
      <div className="product-info">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="price-info">
          <span className="offer-price">{offerprice}</span>
          <span className="original-price">{originalprice}</span>
          <span className="discount">{discount} off</span>
        </div>
        <p>
          <strong>Brand:</strong> {brand}
        </p>
        <p>
          <strong>Rating:</strong> {rating} ({ratedby} reviews)
        </p>
        <p>
          <strong>Bought:</strong> {bought}
        </p>
        <p>
          <strong>OS:</strong> {os}
        </p>
        <p>
          <strong>Display:</strong> {display}
        </p>
        <p>
          <strong>Cellular Technology:</strong> {cellulartechnology}
        </p>
        <p>
          <strong>RAM:</strong> {ram}
        </p>
        <p>
          <strong>Storage:</strong> {rom}
        </p>
        <p>
          <strong>Processor Speed:</strong> {processorspeed}
        </p>
        <p>
          <strong>Battery:</strong> {battery}
        </p>
        <p>
          <strong>About:</strong> {about}
        </p>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleAddToCart} disabled={loading}>
          {loading ? "Adding to Cart..." : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  _id: PropTypes.string.isRequired, // Add product id prop type
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  bought: PropTypes.string.isRequired,
  offerprice: PropTypes.string.isRequired,
  originalprice: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ratedby: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  cellulartechnology: PropTypes.string.isRequired,
  os: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  rom: PropTypes.string.isRequired,
  processorspeed: PropTypes.string.isRequired,
  battery: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ProductDetail;
