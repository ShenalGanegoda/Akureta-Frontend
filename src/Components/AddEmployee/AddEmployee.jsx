import React from "react";
import axios from "axios";
import "./AddEmployee.css";

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: "",
      employeeAge: "",
      employeeGender: "",
      aboutEmployee: "",
      employeeUsername: "",
      employeePassword: "",
      image: "",
    };
  }

  // Method to handle changes in input fields
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Method to handle review submissions
  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create an object with the form data
      const formData = {
        employeeName: this.state.employeeName,
        employeeAge: this.state.employeeAge,
        employeeGender: this.state.employeeGender,
        aboutEmployee: this.state.aboutEmployee,
        employeeUsername: this.state.employeeUsername,
        employeePassword: this.state.employeePassword,
        image: this.state.image,
      };

      // Convert form data to JSON
      const jsonData = JSON.stringify(formData);

      // Making an HTTP POST request to the backend endpoint using Axios.
      const response = await axios.post(
        "https://akureta-backend.onrender.com/employeesignup",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json", // Setting the content type to JSON.
          },
        }
      );

      if (!response.data) {
        throw new Error("Failed to add employee");
      }

      // Resetting form fields after successful submission.
      this.setState({
        employeeName: "",
        employeeAge: "",
        employeeGender: "",
        aboutEmployee: "",
        employeeUsername: "",
        employeePassword: "",
        image: null,
      });

      console.log("Employee added successfully");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  // Method to handle image upload procedure
  handleImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file)
    console.log(base64)
    this.setState({ image: base64 });
  };

  render() {
    return (
      <div className="add-employee-container">
      <div className="add-employee">
        <h1>ADD EMPLOYEES</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            EMPLOYEE NAME:
            <input
              type="text"
              name="employeeName"
              value={this.state.employeeName}
              onChange={this.handleInput}
            ></input>
          </label>

          <label>
            EMPLOYEE AGE:
            <input
              type="number"
              name="employeeAge"
              value={this.state.employeeAge}
              onChange={this.handleInput}
            ></input>
          </label>

          <label>
            EMPLOYEE GENDER:
            <input
              type="text"
              name="employeeGender"
              value={this.state.employeeGender}
              onChange={this.handleInput}
            ></input>
          </label>

          <label>
            ABOUT EMPLOYEE :
            <input
              type="text"
              name="aboutEmployee"
              value={this.state.aboutEmployee}
              onChange={this.handleInput}
            ></input>
          </label>

          <label>
            ADD IMAGE HERE:
            <input
              type="file"
              accept="image/*"
              onChange={this.handleImage}
            ></input>
          </label>
          <label>
            USERNAME :
            <input
              type="text"
              name="employeeUsername"
              value={this.state.employeeUsername}
              onChange={this.handleInput}
            ></input>
          </label>
          <label>
            PASSWORD :
            <input
              type="password"
              name="employeePassword"
              value={this.state.employeePassword}
              onChange={this.handleInput}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}
export default AddEmployee;

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () =>{
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })

}