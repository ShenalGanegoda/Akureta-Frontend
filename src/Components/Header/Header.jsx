// eslint-disable-next-line no-unused-vars
import "./Header.css";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import accounts_icon from "../../Assets/account_icon.svg";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="home-icon">
        <Link style={{ textDecoration: "none" }} to="/view-analysis">
            <TiHome />
          </Link>
        </li>
        <li>
          <a href="#">
            <FaUserCircle />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
