import "./ProductList.css";
import food1 from "../../Assets/biriyani.jpg";
import food2 from "../../Assets/food1.jpg";
import food3 from "../../Assets/food2.jpg";
import food4 from "../../Assets/food3.jpeg";
import food5 from "../../Assets/food4.jpg";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductList({ setProduct }) {
  const [productList, setProductList] = useState([]);
  //State variable to hold the array retrieved by the backend

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://akureta-backend.onrender.com/getProducts"
        ); //fetching the list of products
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list-main">
      <div className="product-list-heading">
        <h1>Products</h1>
        <Link to="/addproduct" className="addProducts-btn">
          Add Products
        </Link>
      </div>
      <hr />
      <div className="product-list">
        {productList.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setProduct={setProduct}
          />
        ))}
      </div>
    </div>
  );
}
