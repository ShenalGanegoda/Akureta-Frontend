import EmployeeList from "../Components/EmployeeList/EmployeeList";
import ViewEmployee from "../Components/ViewEmployee/ViewEmployee";
import { useState } from "react";
import axios from "axios";

export default function Employees() {
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [imageFile, setImageFile] = useState(null);

  // Method to set selected employee
  const setEmployee = (employee) => {
    setSelectedEmployee(employee);
    setShowEmployeeDetails(true);
  };

  // Method to handle employee image
  const retrieveAndSaveImage = async (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    // Image upload to backend
    try {
      const dataForm = new FormData();
      dataForm.append("image", file);
      // Post request to backend API
      const reqBackend = await axios.post("/API/uploadImage", dataForm, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log("Image Uploaded Successfully!:", reqBackend.data);
    } catch (error) {
      console.log("Upload failed", error);
    }
  };

  return (
    <div className="test">
      <h1>Employees</h1>
      {showEmployeeDetails ? (
        <ViewEmployee selectedEmployee={selectedEmployee} />
      ) : (
        <EmployeeList setEmployee={setEmployee} />
      )}
      {/* Input for Image upload */}
      <input type="file" onChange={retrieveAndSaveImage} />
      {/* <Outlet/> */}
    </div>
  );
}
