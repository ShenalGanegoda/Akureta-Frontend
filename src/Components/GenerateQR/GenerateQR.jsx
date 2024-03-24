import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './GenerateQR.css'

export default function GenerateQR() {
 const [employees, setEmployees] = useState([]);
 const [products, setProducts] = useState([]);
 const [employee, setEmployee] = useState("");
 const [foodItems, setFoodItems] = useState([]);

 const navigate = useNavigate();

 useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeResponse = await axios.get("https://akureta-backend.onrender.com/employeesignup");
        const productResponse = await axios.get("https://akureta-backend.onrender.com/getProducts");
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
    const selectedFood = event.target.value;
    if (!foodItems.includes(selectedFood)) {
      setFoodItems([...foodItems, selectedFood]);
    }
 };

 const onSubmit = () => {
    if (!employee || foodItems.length === 0) {
      alert("Please select an employee and at least one food item.");
      return;
    }

    // Navigate to ReviewPage and pass the selected employee and food items as state
    navigate('/review', { state: { employee, foodItems } });
 };

 return (
    <div className="qr-main">
      <h1>Generate QR for Order</h1>
      <form>
        <div className="employee-section">
          <label>Select Employee:</label>
          <select onChange={onEmployeeSelect} value={employee}>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.employeeName}>{emp.employeeName}</option>
            ))}
          </select>
        </div>
        <div className="product-section">
          <label>Select Food:</label>
          <select onChange={onFoodSelect} multiple>
            {products.map((prod) => (
              <option key={prod.id} value={prod.productName}>{prod.productName}</option>
            ))}
          </select>
        </div>
      </form>
      <div className="qr-display">
        <button className="form-submit" onClick={onSubmit}>Generate QR</button>
      </div>
    </div>
 );
}
