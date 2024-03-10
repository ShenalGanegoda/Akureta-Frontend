import "./EmployeeCard.css";

export default function EmployeeCard({ employee, setEmployee }) {
  const handleViewEmployee = () => {
    setEmployee(employee);
  };

  return (
    <div className="employee-card-container">
      <img src={employee.image} alt="Employee Image"></img>
      <div>
        <h2>{employee.name}</h2>
      </div>
      <div className="card-buttons">
        <button className='view-btn' onClick={() => handleViewEmployee()}>View Analysis</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
}
