import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import Logo from "/MyProjects/SS2/EcommerceApp/client/src/assets/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Sign - Ecommer App">
      <div
        className="form-log-in form-container"
        style={{ minHeight: "100vh" }}
      >
        <form className="" onSubmit={handleSubmit}>
          <div className="imgLogin1">
            <img className="imgLogin" src={Logo} alt="Logo" />
          </div>
          <div className="yourAccountForEverything">
            YOUR ACCOUNT FOR EVERYTHING
          </div>

          <div className="mb-3 mt-5">
            <span className="email">
              <label htmlFor="email">Email:</label>
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-5">
            <span className="password">
              <label htmlFor="password">Password:</label>
            </span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="keepMeAndForgot">
            <div>
              <input type="checkbox" />
              <span className="ms-2">Keep me signed in</span>
            </div>

            <div>
              <button
                className="forgotPasswordBtn"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <div className="byLogginIn">
            By logging in, you agree to SS2's{" "}
            <Link to="/privacy-policy" className="privacyPolicy">
              Privacy Policy
            </Link>{" "}
            and &nbsp;
            <Link to="/terms-of-use" className="termsOfUse">
              Terms of Use
            </Link>
          </div>

          <div className="loginBtn">
            <button type="submit" className="loginBtn2 btn btn-dark">
              LOGIN
            </button>
          </div>

          <div className="mt-4">
            <p className="notAMember">
              Not a member?{" "}
              <Link to="/register" className="signUpHere">
                Sign up here.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
