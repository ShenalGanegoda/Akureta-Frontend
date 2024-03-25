import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CustomerReview.css";

export default function CustomerReview() {
  const { employee, foodItems } = useParams();
  const productArray = foodItems.split(",");
  const [employeeReview, setEmployeeReview] = useState("");
  const [productReviews, setProductReviews] = useState({});
  const [predictedRating, setPredictedRating] = useState(null);

  const handleEmployeeReviewChange = (e) => {
    setEmployeeReview(e.target.value);
  };

  const handleProductReviewChange = (productId, e) => {
    const updatedProductReviews = {
      ...productReviews,
      [productId]: e.target.value,
    };
    setProductReviews(updatedProductReviews);
  };

  const handleReviewSubmit = async () => {
    // Constructing the review object
    const reviewData = {
      employeeReview: employeeReview,
      productReviews: productReviews,
    };

    // Sending a POST request to the backend
    const response = await fetch(
      "https://shielded-temple-55799-3c421ed2721d.herokuapp.com/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      }
    );

    const data = await response.json();
    setPredictedRating(data); // Setting the predicted rating received from the server
  };

  return (
    <div className="employee_food">
      <h1>Add Review</h1>
      <hr />
      <label>Employee Review</label>
      <input
        placeholder="Add Comment"
        value={employeeReview}
        onChange={handleEmployeeReviewChange}
      />
      <hr />
      {productArray.map((food, index) => (
        <div key={index} className="food">
          <label>{food}</label>
          <input
            placeholder="Add Comment"
            value={productReviews[food] || ""}
            onChange={(e) => handleProductReviewChange(food, e)}
          />
        </div>
      ))}
      <hr />
      <button onClick={handleReviewSubmit}>Submit Review</button>
      <hr />
      {predictedRating !== null && (
        <div>
          <h2>Predicted Rating: {predictedRating}</h2>
        </div>
      )}
    </div>
  );
}
