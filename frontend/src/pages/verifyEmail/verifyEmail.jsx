import React, { useRef, useState } from "react";
import "./verifyEmail.css";
import Loader from "../../component/loader/loader";
const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value != "" && index < otp.length - 1) {
        inputRef.current[index + 1].focus();
      }
    }
  };
  const keyDownEvent = (e, index) => {
    if (e.key == "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div className="verify-email">
      <div className="verify-container">
        <h1>Verify your email</h1>
        <p>Enter the 6 digit code send to your Email address</p>
        <form>
          {otp.map((val, index) => {
            return (
              <div className="input-container">
                <input
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                  ref={(element) => {
                    inputRef.current[index] = element;
                  }}
                  value={otp[index]}
                  onKeyDown={(e) => keyDownEvent(e, index)}
                  type="text"
                  maxLength={1}
                />
              </div>
            );
          })}
        </form>
        <div className="resend-otp">
          Don't recieve the OTP ? <span>Resend</span>
        </div>
        <button className="verify-button">Verify</button>
      </div>
    </div>
  );
};

export default VerifyEmail;
