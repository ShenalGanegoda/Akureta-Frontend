import "./ProductCard.css";

export default function ProductCard({ product, setProduct }) {
  const handleViewProduct = () => {
    setProduct(product);
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
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
}
