import "./Navigation.css";
import system_logo from "../../Assets/akureta--logo-no-back.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const ToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [menu, setMenu] = useState("view-analysis");
  return (
    <>
      {/* <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} /> */}
      <div className="nav">
        <img src={system_logo} alt="system logo"></img>
        <ul>
          <Link style={{ textDecoration: "none" }} to="/view-analysis">
            <li
              onClick={() => {
                setMenu("view-analysis");
              }}
            >
              View Analysis{menu === "view-analysis" ? <FaAngleRight /> : null}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/add-reviews">
            <li
              onClick={() => {
                setMenu("add-review");
              }}
            >
              Add Review{menu === "add-review" ? <FaAngleRight /> : null}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products">
            <li
              onClick={() => {
                setMenu("products");
              }}
            >
              Products{menu === "products" ? <FaAngleRight /> : null}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/employees">
            <li
              onClick={() => {
                setMenu("employees");
              }}
            >
              Employees{menu === "employees" ? <FaAngleRight /> : null}
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
