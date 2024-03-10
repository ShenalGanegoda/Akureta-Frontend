import "./Header.css";
import { TiHome } from "react-icons/ti";
import home_icon from "../../Assets/home_icon.svg";
import bell_icon from "../../Assets/bell_icon.svg";
import accounts_icon from "../../Assets/account_icon.svg";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="/view-analysis">
            <TiHome />
          </a>
        </li>
        <li>
          <a href="#">
            <FaBell />
          </a>
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
