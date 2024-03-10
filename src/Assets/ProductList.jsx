import "./ProductList.css";
import food1 from "../../Assets/biriyani.jpg";
import food2 from "../../Assets/food1.jpg";
import food3 from "../../Assets/food2.jpg";
import food4 from "../../Assets/food3.jpeg";
import food5 from "../../Assets/food4.jpg";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({ setProduct }) {
  const productList = [
    {
      id: 1,
      name: "Chicken Biriyani",
      image: food1,
      description:
        "Chicken biryani is a fragrant Indian rice dish cooked with marinated chicken, aromatic spices, and herbs, creating a flavorful meal",
      totalReviews: 20,
      negativeReviews: 5,
      positiveReviews: 15,
      rating: 3,
    },
    {
      id: 2,
      name: "Fried Rice",
      image: food2,
      description:
        "Fried rice is a flavorful dish made by stir-frying cooked rice with vegetables, meat, eggs, and seasonings in a hot skillet.",
      totalReviews: 10,
      negativeReviews: 5,
      positiveReviews: 5,
      rating: 2,
    },
    {
      id: 3,
      name: "Steack Dish",
      image: food3,
      description:
        "Juicy steak seasoned with spices, seared to perfection, served with a side of mashed potatoes and grilled vegetables for a hearty meal.",
      totalReviews: 20,
      negativeReviews: 1,
      positiveReviews: 19,
      rating: 4,
    },
    {
      id: 4,
      name: "Italian Pizza",
      image: food4,
      description:
        "Pizza is a popular dish originating from Italy, typically made with a thin, round dough base topped with sauce, cheese, and various toppings.",
      totalReviews: 10,
      negativeReviews: 5,
      positiveReviews: 5,
      rating: 2,
    },
  ];

  return (
    <div className="product-list-main">
      <div className="product-list-heading">
        <h1>Employees</h1>
        <button className="addProducts-btn">Add Products</button>
      </div>
      <hr />
      <div className="product-list">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setProduct={setProduct}
          />
        ))}
      </div>
    </div>
  );
}
