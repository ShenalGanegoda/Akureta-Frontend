import React from "react";
import { MdAlternateEmail, MdLock } from "react-icons/md";
import "./Signup.css";

const Signup = ({ onSignIn }) => {
  const handleSignIn = (e) => {
    e.preventDefault();
    onSignIn(true);
  };

  return (
    <div className="package">
      <form onSubmit={handleSignIn} id="form-content">
        <h1>Sign in</h1>
        <h4>Log into your account to continue</h4>
        <div className="input">
          <input type="text" placeholder="Email Address" required />
          <MdAlternateEmail className="icon" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" required />
          <MdLock className="icon" />
        </div>

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Signup;
