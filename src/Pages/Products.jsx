import ProductList from "../Components/ProductList/ProductList";
import ViewProduct from "../Components/ViewProduct/ViewProduct";
import { useState } from "react";
import axios from "axios";

export default function Products() {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [imageFile, setImageFile] = useState(null);

  // Method to handle product image
  const retrieveAndSaveImage = async (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    // Image upload to backend
    try {
      const dataForm = new FormData();
      dataForm.append("image", file);
      // Post request to backend API
      const reqBackend = await axios.post("/API/uploadImage", dataForm, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log("Image Uploaded Successfully!:", reqBackend.data);
    } catch (error) {
      console.log("Upload failed", error);
    }
  };

  const setProduct = (product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  return (
    <div className="test">
      {showProductDetails ? (
        <ViewProduct selectedProduct={selectedProduct} />
      ) : (
        <ProductList setProduct={setProduct} />
      )}
      
    </div>
  );
}
