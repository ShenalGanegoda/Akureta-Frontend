import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import './Register.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    managerId: '',
    managerName: '',
    managerContact: '',
    managerEmail: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/managers/register', formData);
      console.log('Manager registered successfully:', response.data);

      // Show SweetAlert message for successful registration
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'Your account has been successfully registered!',
      });

      // Reset form data
      setFormData({
        managerId: '',
        managerName: '',
        managerContact: '',
        managerEmail: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error registering manager:', error.response.data);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="managerId">Manager ID:</label>
          <input className="form-input" type="text" id="managerId" name="managerId" value={formData.managerId} onChange={handleChange} required />
        </div>
        <div>
          <label className="form-label" htmlFor="managerName">Manager Name:</label>
          <input className="form-input" type="text" id="managerName" name="managerName" value={formData.managerName} onChange={handleChange} required />
        </div>
        <div>
          <label className="form-label" htmlFor="managerContact">Manager Contact:</label>
          <input className="form-input" type="text" id="managerContact" name="managerContact" value={formData.managerContact} onChange={handleChange} required />
        </div>
        <div>
          <label className="form-label" htmlFor="managerEmail">Manager Email:</label>
          <input className="form-input" type="email" id="managerEmail" name="managerEmail" value={formData.managerEmail} onChange={handleChange} required />
        </div>
        <div>
          <label className="form-label" htmlFor="password">Password:</label>
          <input className="form-input" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
          <input className="form-input" type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button className="form-button" type="submit">Register</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;
