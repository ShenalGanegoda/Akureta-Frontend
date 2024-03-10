import { Link } from "react-router-dom";
import "./EmployeeList.css";
import Card from "../EmployeeCard/EmployeeCard";
import waiter1 from "../../Assets/waiter1.jpg";
import waiter2 from "../../Assets/waiter2.jpg";
import waiter3 from "../../Assets/waiter3.jpeg";
import waiter4 from "../../Assets/waiter4.jpg";
import waiter5 from "../../Assets/waiter5.jpg";
import waiter6 from "../../Assets/Photo.jpg";

export default function EmployeeList({ setEmployee }) {
  const employeeList = [
    {
      id: 1,
      name: "John Done",
      image: waiter1,
      description:
        "Many philosophical debates that began in ancient times are still debated today. In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.",
      totalReviews: 20,
      negativeReviews: 5,
      positiveReviews: 15,
      rating: 3,
    },
    {
      id: 2,
      name: "Jack Barter",
      image: waiter2,
      description:
        " today. In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.",
      totalReviews: 10,
      negativeReviews: 5,
      positiveReviews: 5,
      rating: 2,
    },
    {
      id: 3,
      name: "Mary Cooper",
      image: waiter3,
      description:
        "Many philosophical debates that began in ancient times are still debated today. In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.",
      totalReviews: 20,
      negativeReviews: 1,
      positiveReviews: 19,
      rating: 4,
    },
    {
      id: 4,
      name: "Kylie Terhune",
      image: waiter4,
      description:
        "Many philosophical debates that began in ancient times are still debated today. In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.",
      totalReviews: 10,
      negativeReviews: 5,
      positiveReviews: 5,
      rating: 2,
    },
    {
      id: 5,
      name: "Bob Stone",
      image: waiter5,
      description:
        "Many philosophical debates that began in ancient times are still debated today. In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.",
      totalReviews: 20,
      negativeReviews: 1,
      positiveReviews: 19,
      rating: 4,
    },
    {
      id: 6,
      name: "Angela Frost",
      image: waiter6,
      description:
        "Many philosophical debates that began in ancient times are still debated today. In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.",
      totalReviews: 20,
      negativeReviews: 1,
      positiveReviews: 19,
      rating: 4,
    },
  ];

  return (
    <div className="employee-list-main">
      <div className="employee-list-heading">
        <h1>Employees</h1>
        <Link to="/addemployee" className="addEmployees-btn">
          Add Employees
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
