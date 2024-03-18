import { useState } from "react";
import "./EmployeeCard.css";
import axios from "axios";
import ConfirmationModal from "../Modals/ConfirmationModal";

export default function EmployeeCard({
  employee,
  setEmployee,
  updateEmployeeList,
}) {
  const handleViewEmployee = () => {
    setEmployee(employee);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleRemoveEmployee = async () => {
    try {
      // Sending a DELETE request to the backend API
      await axios.delete(
        `https://akureta-backend.onrender.com/employeesignup/${employee._id}`
      );
      console.log("Employee removed successfully", employee);
      setIsModalOpen(false); // Closing the modal after deletion
      updateEmployeeList(); // Updating the list of employees in the parent component
    } catch (error) {
      console.error("Error removing employee:", error);
      setError("Failed to remove employee. Please try again."); // Set error state
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="employee-card-container">
      <img src={employee.image} alt="Employee Image" />
      <div>
        <h2>{employee.employeeName}</h2>
      </div>
      <div className="card-buttons">
        <button className="view-btn" onClick={handleViewEmployee}>
          View Analysis
        </button>
        <button className="remove-btn" onClick={toggleModal}>
          Remove
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onConfirm={handleRemoveEmployee}
        confirmationMessage={`Are you sure you want to delete ${employee.employeeName}?`}
        error={error}
        clearError={() => setError(null)} // Function to clear error state
      />
    </div>
  );
}
