import { useState } from "react";
import "./GenerateQR.css";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

export default function GenerateQR() {
  const [employee, setEmployee] = useState("");
  const [foodItems, setfoodItems] = useState([]);

  const [url, setUrl] = useState("");
  const [qrIsVisible, setQrIsVisible] = useState(false);

  const onEmployeeSelect = (event) => {
    setEmployee(event.target.value);
  };

  const onFoodSelect = (event) => {
    if (foodItems.includes(event.target.value)) return;

    setfoodItems((currentFoodItems) => {
      return [...currentFoodItems, event.target.value];
    });
  };

  const onSubmit = () => {
    let pathTo = `/review/${employee}/${foodItems}`;
    setUrl(pathTo);
    setQrIsVisible(true);
  };

  return (
    <div className="qr-main">
      <h1>Generate QR for Order</h1>
      <form>
        <div className="employee-section">
          <label>Select Employee:</label>
          <select onChange={onEmployeeSelect} name="cars" id="cars" multiple>
            <option value="Mary">Mary</option>
            <option value="John">John</option>
            <option value="Lisa">Lisa</option>
            <option value="Mat">Mat</option>
          </select>
          <h2>{employee}</h2>
        </div>

        <div className="product-section">
          <label>Select Food:</label>
          <select onChange={onFoodSelect} name="cars" id="cars" multiple>
            <option value="Fried Rice">Fried Rice</option>
            <option value="Kottu">Kottu</option>
            <option value="Salad">Salad</option>
            <option value="Pizza">Pizza</option>
          </select>
          <h2>{foodItems}</h2>
        </div>
      </form>

      <div className="qr-display">
        <button className="form-submit" onClick={onSubmit}>
          Generate QR
        </button>
        {qrIsVisible && <QRCode value={url} size={200}></QRCode>}
      </div>

      <Link to={url}>
        <h1>{url}</h1>
      </Link>
    </div>
  );
}
