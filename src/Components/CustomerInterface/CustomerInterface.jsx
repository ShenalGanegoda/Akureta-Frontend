import React from "react";
import './CustomerInterface.css'
import { MdDisabledByDefault } from "react-icons/md";
import logo from '../../Assets/akureta--logo-no-back.png'

const CustomerInterface = () => {
    return (
        <div className="interface-main">
            <div className="interface-header">
                <img src={logo} alt="logo" />
            </div>
        </div>

    )
}
export default CustomerInterface