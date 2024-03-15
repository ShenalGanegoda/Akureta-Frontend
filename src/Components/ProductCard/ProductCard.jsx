import "./ProductCard.css";
import axios from "axios";

export default function ProductCard({ product, setProduct }) {
  const handleViewProduct = () => {
    setProduct(product);
  };

  const handleRemoveProduct = async () => {
    try {
      // Sending a DELETE request to the backend API
      await axios.delete(
        `https://akureta-backend.onrender.com/products/${product._id}`
      );
      console.log("Product removed successfully");
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className="product-card-container">
      <img src={product.image} alt="Product Image"></img>
      <div>
        <h2>{product.productName}</h2>
      </div>
      <div className="product-card-buttons">
        <button className="view-btn" onClick={() => handleViewProduct()}>
          View Analysis
        </button>
        <button className="remove-btn" onClick={() => handleRemoveProduct()}>
          Remove
        </button>
      </div>
    </div>
  );
}
