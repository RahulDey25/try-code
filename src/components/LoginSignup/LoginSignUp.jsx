import React, { useState } from "react";
import "./LoginSignUp.css";
import { MdMovie } from "react-icons/md";

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true); // State to track whether to show signup or login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({}); // State to track form errors

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle between signup and login forms
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {}; // Initialize new errors object

    if (!email.trim()) {
      newErrors.email = "Can't be empty"; // Set error message for email field
    }
    if (!password.trim()) {
      newErrors.password = "Can't be empty"; // Set error message for password field
    }
    if (isSignUp && !repeatPassword.trim()) {
      newErrors.repeatPassword = "Can't be empty"; // Set error message for repeat password field
    }

    setErrors(newErrors); // Update errors state

    // Proceed with form submission if there are no errors
    if (Object.keys(newErrors).length === 0) {
      // Implement form submission logic here
    }
  };

  const handleInputFocus = () => {
    setErrors({}); // Clear errors when input fields receive focus
  };

  return (
    <div>
      <div className="vdo-icon">
        <MdMovie />
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
          <div className={`input-box ${errors.email ? "error" : ""}`}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleInputFocus}
            />
            {errors.email && (
              <span className="error-message">Can't be empty</span>
            )}
          </div>

          <div className={`input-box ${errors.password ? "error" : ""}`}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleInputFocus}
            />
            {errors.password && (
              <span className="error-message">Can't be empty</span>
            )}
          </div>

          {isSignUp && (
            <div
              className={`input-box ${errors.repeatPassword ? "error" : ""}`}
            >
              <input
                type="password"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                onFocus={handleInputFocus}
              />
              {errors.repeatPassword && (
                <span className="error-message">Can't be empty</span>
              )}
            </div>
          )}

          <button type="submit">
            {isSignUp ? "Create an account" : "Login to your account"}
          </button>
          <div className="login-link">
            <p>
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <a href="/#" onClick={toggleForm}>
                {isSignUp ? "Login" : "Sign Up"}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
