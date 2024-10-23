import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../component/loader/loader";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  return (
    <div className="signup-page">
      <div className="signup">
        <div className="section-left">
          <h1>Welcome to Dahilar Awwal</h1>
        </div>
        <div className="section-right">
          <h1 className="signup-title">Create an account</h1>
          <form onSubmit={onFormSubmit}>
            <div className="input-field">
              <i className="fa-regular fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                required
              />
              <i
                onClick={() => setShowPassword((prev) => !prev)}
                className={`fa-regular ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" name="" id="" required />
              <p>By continuing, i agree the terms of use & privacy policy</p>
            </div>
            <button>
              {!loading ? (
                <>Create Account</>
              ) : (
                <div className="loading-btn">
                  Please Wait
                  <Loader />
                </div>
              )}
            </button>
          </form>
          <div className="have-account">
            <p>
              Already have account ?
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                {" "}
                Login
              </span>
            </p>
          </div>

          <div className="login-admin">
            <p>
              Login as admin ? <span>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
