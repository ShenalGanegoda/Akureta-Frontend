import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom'; 
import './Login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    managerEmail: '',
    password: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/managers/login', formData);
      console.log('Login successful:', response.data);

      // Show SweetAlert message for successful login
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
      });

      // Update login status to true
      setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error.response.data);

      // Show SweetAlert message for failed login
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.',
      });
    }
  };

  // Redirect to another page if login is successful
  if (loggedIn) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="form-container">
      <h2 className="form-heading">Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="managerEmail">Manager Email:</label>
          <input className="form-input" type="email" id="managerEmail" name="managerEmail" value={formData.managerEmail} onChange={handleChange} required />
        </div>
        <div>
          <label className="form-label" htmlFor="password">Password:</label>
          <input className="form-input" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button className="form-button" type="submit">Login</button>
      </form>
      <p className="register-link">
        Haven't created an account yet? <a href="/">Register</a>
      </p>
    </div>

  
  );
};

export default LoginPage;
