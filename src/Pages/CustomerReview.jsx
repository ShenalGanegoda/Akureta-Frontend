import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CustomerReview.css';
export default function CustomerReview() {
  const { employee, foodItems } = useParams();

  const [displayHeaderAndNavbar, setDisplayHeaderAndNavbar] = useState (true);

  useEffect (() => {

    const params = new URLSearchParams(window.location.search);
    const fromQRCode = params.get('fromQRCode');
    if (fromQRCode === 'true') {
      setDisplayHeaderAndNavbar(false);
    }
  },[])

  const foodArray = foodItems.split(",");
  
  
  return (
    <div className="employee_food">
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
        <div className="food">
          <label>{food}</label>
          <input placeholder="Add Comment"></input>
        </div>
      ))}
    </div>
  );
}
