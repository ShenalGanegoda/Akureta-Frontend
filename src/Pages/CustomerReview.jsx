import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CustomerReview.css";
export default function CustomerReview() {
  const { employee, foodItems } = useParams();
  const productArray = foodItems.split(",");
  const [displayHeaderAndNavbar, setDisplayHeaderAndNavbar] = useState(true);

  useEffect(() => {
    console.log("useEffect is running");
    const params = new URLSearchParams(window.location.search);
    const fromQR = params.get("fromQR");
    console.log("fromQR", fromQR);
    if (fromQR === "true") {
      console.log("Set displayHeaderAndNavbar to false");
      setDisplayHeaderAndNavbar(false);
    }
  }, []);

  console.log("displayHeaderAndNavbar", displayHeaderAndNavbar);

  return (
    <div className="employee_food">
      <h1>Add Review</h1>
      <hr></hr>
      {/* Just one input field for employee */}
      <label>{employee}</label>
      <input placeholder="Add Comment"></input>
      <hr></hr>
      {/* Dynamically render input fields for ordered food */}
      {productArray.map((food) => (
        <div className="food">
          <label>{food}</label>
          <input placeholder="Add Comment"></input>
        </div>
      ))}
    </div>
  );
}
