// src/pages/Auth/Login.jsx
import React, { useContext, useState } from "react";
import { AppContext } from '../../context/Appcontext';
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { backendUrl, setIsLoggedIn } = useContext(AppContext);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const response = await axios.post(`${backendUrl}/api/auth/register`, {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setIsLoggedIn(true);
          localStorage.setItem("authToken", response.data.authToken);
          window.location.href = "http://localhost:3001/";
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/auth/login`, {
          email,
          password,
        });

        if (response.data.success) {
          const authToken = response.data.authToken;
          localStorage.setItem("authToken", authToken);
          setIsLoggedIn(true);
          window.location.href = "http://localhost:3001/";
        } else {
          toast.error("Login failed! Please check your credentials.");
        }
      }
    } catch (error) {
      console.error("Auth error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 px-3 px-sm-0"
      style={{ background: "linear-gradient(to bottom right, #bfdbfe, #c084fc)" }}
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
        <h2 className="text-center mb-3">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>

        <p className="text-center mb-4 text-light">
          {state === "Sign Up" ? "Create your account" : "Login to your account!"}
        </p>

        <form onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="mb-3">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                required
                style={{ backgroundColor: "#f0f0f0", color: "#333", border: "none" }}
              />
            </div>
          )}

          <div className="mb-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
              style={{ backgroundColor: "#f0f0f0", color: "#333", border: "none" }}
            />
          </div>

          <div className="mb-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required
              style={{ backgroundColor: "#f0f0f0", color: "#333", border: "none" }}
            />
          </div>

          {state === "Login" && (
            <div className="text-end mb-3">
              <button
                type="button"
                className="btn btn-link p-0 text-light"
                style={{ fontSize: "0.9rem" }}
                onClick={() => window.location.href = '/reset-password'}
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100 mb-3">
            {state === "Sign Up" ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center">
          <button
            type="button"
            className="btn btn-link text-light"
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
          >
            {state === "Sign Up"
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
