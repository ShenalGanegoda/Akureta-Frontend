import ProductList from "../Components/ProductList/ProductList";
import ViewProduct from "../Components/ViewProduct/ViewProduct";
import { useState } from "react";

export default function Products() {
  const [showProductDetails, setshowProductDetails] = useState(false);
  const [selectedProduct, setselectedProduct] = useState({});

  const setProduct = (product) => {
    setselectedProduct(product);
    setshowProductDetails(true);
  };

  return (
    <div className="test">
      {showProductDetails ? (
        <ViewProduct selectedProduct={selectedProduct} />
      ) : (
        <ProductList setProduct={setProduct} />
      )}

      {/* <Outlet/> */}
    </div>
  );
}
