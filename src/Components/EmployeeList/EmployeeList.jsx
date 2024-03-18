import { Link } from "react-router-dom";
import "./EmployeeList.css";
import Card from "../EmployeeCard/EmployeeCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function EmployeeList({ setEmployee }) {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://akureta-backend.onrender.com/employeesignup"
        );
        setEmployeeList(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);
  return (
    <div className="employee-list-main">
      <div className="employee-list-heading">
        <h1>Employees</h1>
        
          <Link to="/addemployee" >
          <button className="addEmployees-btn">
            Add Employees
            </button>
          </Link>
        
      </div>
      <hr />
      <div className="employee-list">
        {employeeList.map((employee) => (
          <Card
            key={employee.id}
            employee={employee}
            setEmployee={setEmployee}
          />
        ))}
      </div>
    </div>
  );
}
