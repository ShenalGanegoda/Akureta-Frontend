import { useState, useEffect } from "react";
import "./GenerateQR.css";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import axios from "axios";

export default function GenerateQR() {
  const [employees, setEmployees] = useState([]);
  const [products, setProducts] = useState([]);
  const [employee, setEmployee] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [url, setUrl] = useState("");
  const [qrIsVisible, setQrIsVisible] = useState(false);

  useEffect(() => {
    // Fetch employees and products from the backend when the component mounts
    const fetchData = async () => {
      try {
        const employeeResponse = await axios.get(
          "https://akureta-backend.onrender.com/employeesignup"
        );
        const productResponse = await axios.get(
          "https://akureta-backend.onrender.com/getProducts"
        );
        setEmployees(employeeResponse.data);
        setProducts(productResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onEmployeeSelect = (event) => {
    setEmployee(event.target.value);
  };

  const onFoodSelect = (event) => {
    if (foodItems.includes(event.target.value)) return;
    setFoodItems((currentFoodItems) => [
      ...currentFoodItems,
      event.target.value,
    ]);
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
          <select onChange={onEmployeeSelect} value={employee}>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.name}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>

        <div className="product-section">
          <label>Select Food:</label>
          <select onChange={onFoodSelect} multiple>
            {products.map((prod) => (
              <option key={prod.id} value={prod.name}>
                {prod.name}
              </option>
            ))}
          </select>
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
