import React from "react";
import "./forgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="forget-password-page">
      <div className="forget-password">
        <h1>Forget Password ?</h1>
        <p>We send details how to reset it.</p>

        <input type="email" placeholder="Enter your email" />
        <button>Reset Password</button>
      </div>
    </div>
  );
};

export default ForgetPassword;
