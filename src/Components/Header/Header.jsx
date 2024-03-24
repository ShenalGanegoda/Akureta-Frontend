// eslint-disable-next-line no-unused-vars
import "./Header.css";
import React, {useState} from "react";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import MobileNav from '../../Components/MobileNav/MobileNav'
import logo from '../../Assets/akureta--logo-no-back.png'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
      setOpenMenu(!openMenu);
  };
  console.log("openMenu state:", openMenu);
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    
    <div className="header">
    <div className="header-img">
      <img src={logo} alt="" />
    </div>
    <div className="header-icons">
    <ul>
        <li className="home-icon">
        <Link style={{ textDecoration: "none" }} to="/view-analysis">
            <TiHome />
          </Link>
        </li>

        <li>
        <button className="menu-btn" onClick={toggleMenu}>
          <span className="menu-icon">
            {openMenu ? <IoMdClose/> : <IoMenu/>}
          </span>
        </button>
        </li>
      </ul>

    </div>
      
    </div>
    </>
  );
}

export default Header;
