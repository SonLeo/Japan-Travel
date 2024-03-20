"use client";
import React, { useState } from "react";
import "../login/login.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import { FaGooglePlusG } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  return (
    <div className="py-[100px] flex justify-center items-center">
      <div
        className={isActive ? "active container" : "container"}
        id="container"
      >
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <Link  href="#" className="icon">
                <FaGooglePlusG />
              </Link>
              <Link  href="#" className="icon">
                <FaFacebookF />
              </Link>
              <Link  href="#" className="icon">
                <FaGithub />
              </Link>
              <Link  href="#" className="icon">
                <FaLinkedinIn />
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <Link href="#" className="icon">
                <FaGooglePlusG />
              </Link>
              <Link href="#" className="icon">
                <FaFacebookF />
              </Link>
              <Link href="#" className="icon">
                <FaGithub />
              </Link>
              <Link href="#" className="icon">
                <FaLinkedinIn />
              </Link>
            </div>
            <span>or use your email and password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link href="#">Forget Your Password?</Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="" id="login" onClick={handleLoginClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button className="" id="register" onClick={handleRegisterClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
