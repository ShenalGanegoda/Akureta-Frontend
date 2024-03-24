import React, { useState } from "react";
import './MobileNav.css'
import logo from '../../../src/Assets/akureta--logo-no-back.png'
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
    const [menu, setMenu] = useState("view-analysis");

    const handleLinkClick = () => {
        // Close the menu when a link is clicked
        toggleMenu(false);
    };

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "mobile-menu-active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <img src={logo} alt="" />
                    <ul>
                        <Link style={{ textDecoration: "none" }} to="/view-analysis">
                            <li onClick={() => { setMenu("view-analysis"); handleLinkClick(); }}>
                                <a href='#home' className="menu-item">View Analysis</a>
                            </li>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/add-reviews">
                            <li onClick={() => {setMenu("add-review");}}>
                                <a href="#aboutme" className="menu-item">Add Review</a>
                            </li>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/products">
                            <li onClick={() => {setMenu("products");}}>
                                <a className="menu-item">Products</a>
                            </li>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/employees">
                            <li onClick={() => {setMenu("employees");}}>
                                <a className="menu-item">Employees</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav;
