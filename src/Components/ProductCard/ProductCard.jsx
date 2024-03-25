import React, { useState } from "react";
import "./ProductCard.css";
import axios from "axios";
import ConfirmationModal from "../Modals/ConfirmationModal";

export default function ProductCard({ product, setProduct }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProduct = () => {
    setProduct(product);
  };

  const handleRemoveProduct = async () => {
    try {
      // Sending a DELETE request to the backend API
      await axios.delete(
        `https://akureta-backend.onrender.com/product/${product._id}`
      );
      console.log("Product removed successfully");
      setIsModalOpen(false); // Closing the modal after successful deletion
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="product-card-container">
      <div className="product-card-img">
        <img src={product.image} alt="Product Image" />
      </div>
      
      <div>
        <h2>{product.productName}</h2>
      </div>
      <div className="product-card-buttons">
        <button className="view-btn" onClick={handleViewProduct}>
          View Analysis
        </button>
        <button className="remove-btn" onClick={toggleModal}>
          Remove
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onConfirm={handleRemoveProduct}
        confirmationMessage={`Are you sure you want to delete ${product.productName}?`}
      />
    </div>
  );
}
