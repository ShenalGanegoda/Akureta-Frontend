import React from "react";
import './ConfirmationModal.css'

export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete this employee?</p>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>Confirm</button>
          <button className="cancel-btn"  onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
