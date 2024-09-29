import React from "react";
import "./Home.css";
import ProductList from "../components/ProductList";
import ChatBot from "../components/ChatBot";

export const Home = () => {
  return (
    <div>
      <header className="header-banner">
        <div className="header-content">
          <h1>Fashion Week</h1>
          <p>All clothes up to 45% off and special winter collections</p>
          <button>Shop Now</button>
        </div>
      </header>
      <section className="features">
        <div className="feature-item">Special Gift Cards</div>
        <div className="feature-item">Secure Payment</div>
        <div className="feature-item">24/7 Support</div>
        <div className="feature-item">Free Shipping</div>
      </section>
      <h2 className="heading">Featured Products</h2>
      <section className="product-list">
        <div className="products">
          {/* Repeat this block for each product */}
          {/* <div className="product-item">
            <img src="path/to/image.jpg" alt="Product" />
            <h3>Product Name</h3>
            <p>$Price</p>
            <button>Add to Cart</button>
          </div> */}
          <ProductList />
          {/* <ChatBot /> */}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 ElectroMart. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
