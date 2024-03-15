import "./EmployeeCard.css";
import axios from "axios";

export default function EmployeeCard({ employee, setEmployee }) {
  const handleViewEmployee = () => {
    setEmployee(employee);
  };

  const handleRemoveProduct = async () => {
    try {
      // Sending a DELETE request to the backend API
      await axios.delete(
        `https://akureta-backend.onrender.com/employeesignup/${employee._id}`
      );
      console.log("Employee removed successfully");
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className="employee-card-container">
      <img src={employee.image} alt="Employee Image"></img>
      <div>
        <h2>{employee.employeeName}</h2>
      </div>
      <div className="card-buttons">
        <button className="view-btn" onClick={() => handleViewEmployee()}>
          View Analysis
        </button>
        <button className="remove-btn" onClick={() => handleRemoveProduct()}>
          Remove
        </button>
      </div>
    </div>
  );
}
