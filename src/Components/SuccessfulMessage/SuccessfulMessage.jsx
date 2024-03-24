import React from "react";
import './SuccessfulMessage.css'
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessfulMessage(isOpen, onClose, onConfirm) {
    return(
        <div className="message-container">
            <h2>Successfully Added</h2>
            <FaCheckCircle className="check-icon"/>

        </div>
    )
}