import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AppContext } from "../../context/Appcontext";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { backendUrl } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtpHandler = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/send-reset-otp`, { email });

      if (data.success) {
        toast.success("OTP sent to your email!");
        setOtpSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send OTP. Try again.");
    }
  };

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/reset-password`, {
        email,
        otp,
        newPassword,
      });

      if (data.success) {
        toast.success("Password reset successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to reset password. Try again.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 px-3 px-sm-0"
      style={{
        background: "linear-gradient(to bottom right, #bfdbfe, #c084fc)",
      }}
    >
      <div
        className="card p-4 shadow border-0"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#0a1f44",
          borderRadius: "12px",
          color: "white",
        }}
      >
        <h2 className="text-center mb-3">Reset Password</h2>
        <p className="text-center mb-4 text-light">Recover your account</p>

        <form onSubmit={resetPasswordHandler}>
          {/* Email input */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                backgroundColor: "#f0f0f0",
                color: "#333",
                border: "none",
              }}
            />
          </div>

          {/* Send OTP Button */}
          <div className="mb-3 text-center">
            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={sendOtpHandler}
              disabled={!email}
            >
              Send OTP
            </button>
          </div>

          {/* Show OTP and New Password fields only if OTP is sent */}
          {otpSent && (
            <>
              {/* OTP input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  style={{
                    backgroundColor: "#f0f0f0",
                    color: "#333",
                    border: "none",
                  }}
                />
              </div>

              {/* New Password input */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  style={{
                    backgroundColor: "#f0f0f0",
                    color: "#333",
                    border: "none",
                  }}
                />
              </div>

              {/* Submit Reset Password button */}
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Reset Password
              </button>
            </>
          )}
        </form>

        <div className="text-center">
          <button
            type="button"
            className="btn btn-link text-light"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
