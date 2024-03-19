import EmployeeList from "../Components/EmployeeList/EmployeeList";
import ViewEmployee from "../Components/ViewEmployee/ViewEmployee";
import { useState } from "react";
import axios from "axios";

export default function Employees() {
  const [showEmployeeDetails, setshowEmployeeDetails] = useState(false);
  const [selectedEmployee, setselectedEmployee] = useState({});
  const [imageFile, setImageFile] =useState (null);

  const setEmployee = (employee) => {
    setselectedEmployee(employee);
    setshowEmployeeDetails(true);
  };
  //method to handle employee image
  const retrieveAndSaveImage = async (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  
  //Image upload to backend
  try{
    const dataForm = new dataForm();
    dataForm.append("image",file);
  //Post request to backend API
    const reqBackend = await axios.post("/API/uploadImage",dataForm,{
      headers:{
        "Content-type": "multipart/form-data"
      }
    });
    console.log("Image Uploaded Successfully!:",reqBackend.data);
  }catch (error){
    console.log("Upload failed",error)
  }
  return (
    <div className="test">
      {/* <h1>Employees {selectedEmployee ? `> ${selectedEmployee.name}` : ""}</h1> */}
      <h1>Employees</h1>

      {showEmployeeDetails ? (
        <ViewEmployee selectedEmployee={selectedEmployee} />
      ) : (
        <EmployeeList setEmployee={setEmployee} />
      )}
      {/*Input for Image upload*/}
      <input type="file" onChange={retrieveAndSaveImage}/>
      {/* <Outlet/> */}
    </div>
  );
 }
}