import { FaStar } from "react-icons/fa6";

import React from "react";

export default function StarRating({ rating }) {
  const starArray = [];

  for (let i = 1; i < 6; i++) {
    starArray.push(i);
  }
  console.log(starArray);

  return (
    <div>
      {starArray.map((element) => (
        <FaStar
          style={element <= rating ? { color: "orange" } : { color: "black" }}
        />
      ))}
    </div>
  );
}
