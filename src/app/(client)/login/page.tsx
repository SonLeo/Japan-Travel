"use client";
import React, { useState } from "react";
import "../login/login.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { loginUser, registerUser } from "~/app/lib/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { RootState } from "~/app/lib/store";
import authSlice from "~/app/lib/features/authSlice";
const Login = () => {
  //login

  const user = useSelector(
    (state: RootState) => authSlice.selectSlice(state).login.currentUser
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = (e: any) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, router);
  };

  // register

  const [username2, setUsername2] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    const newUser2 = {
      username: username2,
      password: password2,
      email: email,
    };
    registerUser(newUser2, dispatch, router);
  };

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
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
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
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername2(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword2(e.target.value)}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
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
            {/* <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            /> */}
            <input
              type="text"
              placeholder="User name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href="#">Forget Your Password?</Link>
            <button type="submit">Sign In</button>
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
