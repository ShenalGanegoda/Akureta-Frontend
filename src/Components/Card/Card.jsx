import "./Card.css";

export default function Card({ employee, setEmployee }) {
  const handleViewEmployee = () => {
    setEmployee(employee);
  };

  return (
    <div className="card__outer">
      <img src={employee.image} alt="Employee Image"></img>
      <div>
        <h2>{employee.name}</h2>
      </div>
      <div className="buttons">
        <button onClick={() => handleViewEmployee()}>View Analysis</button>
        <button>Remove</button>
      </div>
    </div>
  );
}
