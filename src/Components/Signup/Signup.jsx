import React, { useState, useEffect } from "react";
import { MdAlternateEmail, MdLock } from "react-icons/md";
import axios from "axios";
import "./Signup.css";

const Signup = ({ onSignIn }) => {
  const [employees, setEmployees] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch employee data from the backend API
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://akureta-backend.onrender.com/employeesignup"
        );
        setEmployees(response.data);
        console.log(setEmployees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Check if the entered email and password match any employee's credentials
    const employee = employees.find(
      (emp) =>
        emp.employeeUsername === email && emp.employeePassword === password
    );
    if (employee) {
      // If employee found, sign in
      onSignIn(true);
    } else {
      // If no employee found, show error or handle accordingly
      console.error("Invalid email or password");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const logInOnSubmit = () => {
    onSignIn(true);
  };

  return (
    <div className="package">
      <form onSubmit={handleSignIn} id="form-content">
        <h1>Sign in</h1>
        <h4>Log into your account to continue</h4>
        <div className="input">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <MdAlternateEmail className="icon" />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <MdLock className="icon" />
        </div>

        <button type="submit" onClick={logInOnSubmit}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signup;
