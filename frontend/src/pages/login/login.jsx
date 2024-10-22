import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  return (
    <div className="login-page">
      <div className="login">
        <div className="section-left">
          <h1>welcome to Dahilar Awwal</h1>
        </div>
        <div className="section-right">
            <h1 className="login-title">Welcome</h1>
          <form>
            <div className="input-field">
            <i className="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Enter you email" required />
            </div>
            <div className="input-field">
            <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="password" required />
              <i className="fa-regular fa-eye"></i>
            </div>
            <div className="forget-password">
              <p>forget password?</p>
            </div>
            <button>Login</button>
          </form>
          <div className="create-account">
            <p>Don't have account ? <span onClick={()=>navigate('/signup')}>Create account</span></p>
          </div>
        
          <div className="login-admin">
            <p>Login as admin ? <span>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
