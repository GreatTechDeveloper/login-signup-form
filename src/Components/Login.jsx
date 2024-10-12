import React, { useState } from "react";
import "./Login.css";
import email from "../assets/email.png";
import password from "../assets/password.png";
import person from "../assets/person.png";

export const Login = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="login">
      <div className="container">
        <header className="header">
          <h1>{action}</h1>
        </header>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={person} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email} alt="" />
            <input type="email" placeholder="Email ID" />
          </div>
          <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgot-password">
          {action === "Sign Up" ? (
            ""
          ) : (
            <p>
              Lost Password? <span>Click Here!</span>
            </p>
          )}
        </div>
        <div className="btns">
          <button
            className={action === "Sign Up" ? "btn" : "btn gray"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Login" ? "btn" : "btn gray"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
