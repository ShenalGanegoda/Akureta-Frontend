import EmployeeList from "../Components/EmployeeList/EmployeeList";
import ViewEmployee from "../Components/ViewEmployee/ViewEmployee";
import { useState } from "react";

export default function Employees() {
  const [showEmployeeDetails, setshowEmployeeDetails] = useState(false);
  const [selectedEmployee, setselectedEmployee] = useState({});

  const setEmployee = (employee) => {
    setselectedEmployee(employee);
    setshowEmployeeDetails(true);
  };

  return (
    <div className="test">
      {/* <h1>Employees {selectedEmployee ? `> ${selectedEmployee.name}` : ""}</h1> */}
      <h1>Employees</h1>

      {showEmployeeDetails ? (
        <ViewEmployee selectedEmployee={selectedEmployee} />
      ) : (
        <EmployeeList setEmployee={setEmployee} />
      )}

      {/* <Outlet/> */}
    </div>
  );
}
