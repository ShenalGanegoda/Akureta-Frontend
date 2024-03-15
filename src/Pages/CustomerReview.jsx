import React from "react";
import { useParams } from "react-router-dom";

export default function CustomerReview() {
  const { employee, foodItems } = useParams();

  const foodArray = foodItems.split(",");

  return (
    <div>
      <h1>Customer Review</h1>
      <h2>{employee}</h2>
      <h2>{foodItems}</h2>
      <hr></hr>
      {/* Just one input field for employee */}
      <label>{employee}</label>
      <input placeholder="Add Comment"></input>
      <hr></hr>
      {/* Dynamically render input fields for ordered food */}
      {foodArray.map((food) => (
        <div>
          <label>{food}</label>
          <input placeholder="Add Comment"></input>
        </div>
      ))}
    </div>
  );
}
