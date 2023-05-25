import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdCardMembership } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import Logo from "/MyProjects/SS2/EcommerceApp/client/src/assets/Logo.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-log-in form-container" style={{ minHeight: "90vh" }}>
        <div className="registerVersion2">
          <form onSubmit={handleSubmit}>
            <div className="imgRegister1">
              <img className="imgRegister" src={Logo} alt="Logo" size={30} />
            </div>
            <div className="become">Become a SS2's member to get more</div>
            <div className="theFirstStep">
              The first step to unlocking all perks
            </div>
            <div className="signUpFeature">
              <div>
                <div className="freeShippings">
                  <MdOutlineLocalShipping size={30} />
                </div>
                <div>Free shippings</div>
                <div className="rreturn">& Return</div>
              </div>

              <div>
                <div className="memberOffers">
                  <MdCardMembership size={30} />
                </div>
                <div>Member offers</div>
              </div>

              <div>
                <div className="betterShopping">
                  <GrStatusGood size={30} />
                </div>
                <div>Better Shopping</div>
                <div className="rreturn">Experience</div>
              </div>
            </div>
            <div className="mb-3 mt-5">
              <span className="haha">
                <label>Name:</label>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Name"
                required
                autoFocus
              />
            </div>
            <div className="mb-3 mt-4">
              <span className="haha">
                <label htmlFor="">Email:</label>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3 mt-4">
              <span className="haha">
                <label htmlFor="">Password:</label>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="mb-3 mt-4">
              <span className="haha">
                <label htmlFor="">Phone Number:</label>
              </span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>
            <div className="mb-3 mt-4">
              <span className="haha">
                <label htmlFor="">Address:</label>
              </span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-3 mt-4">
              <span className="haha">
                <label htmlFor="">Security Question:</label>
              </span>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="What is your favorite sports?"
                required
              />
            </div>
            <div className="registerBtn">
              <button type="submit" className="registerBtn2 btn btn-secondary">
                REGISTER
              </button>
            </div>
            <div className="alreadyHave">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="loginRegsss">
                  Log in
                </Link>
              </p>
            </div>
            <div className="bySigningUpFor">
              By signing up for emails, you agree to the SS2's{" "}
              <span>
                <Link className="SS2termddf" to="/terms-of-use">
                  {" "}
                  Terms of Use
                </Link>
              </span>{" "}
              and
              <Link className="Prived" to="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
