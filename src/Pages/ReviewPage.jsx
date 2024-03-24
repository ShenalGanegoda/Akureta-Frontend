import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ReviewPage() {
 const location = useLocation();
 const { employee, foodItems } = location.state || {};
 const [foodItemDetails, setFoodItemDetails] = useState(foodItems.map(() => ""));

 // Function to handle changes in the text fields
 const handleInputChange = (index, event) => {
    const newDetails = [...foodItemDetails];
    newDetails[index] = event.target.value;
    setFoodItemDetails(newDetails);
 };

 // Function to handle form submission
 const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Prepare the data to be sent to the ML model
    const dataToSend = {
      employee,
      foodItems: foodItems.map((item, index) => ({
        name: item,
        details: foodItemDetails[index],
      })),
    };

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your ML model
      const response = await axios.post(' http://127.0.0.1:8000/predict', dataToSend);
      const rating = response.data.rating; // Assuming the response contains a 'rating' field

      // Handle the rating received from the ML model
      console.log(`Rating: ${rating}`);
      // You can now use the rating as needed, e.g., display it to the user
    } catch (error) {
      console.error("Error sending data to ML model:", error);
    }
 };

 return (
    <div className="review-page-main">
      <h2>Review Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Selected Employee: {employee}</label>
        <input type="text" id={employee}/>

        {foodItems.map((item, index) => (
          <div key={index}>
            <label>Food Item {index + 1}: {item}</label>
            <input
              type="text"
              value={foodItemDetails[index]}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
 );
}

export default ReviewPage;
