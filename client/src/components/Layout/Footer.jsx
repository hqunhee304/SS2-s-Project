import React from "react";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="">
              <a
                href="https://github.com/yourgithubusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-4"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedinusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-4"
              >
                <BsLinkedin size={30} />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedinusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-4"
              >
                <GrFacebook size={30} />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedinusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-4"
              >
                <BsInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedinusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-4"
              >
                <FiTwitter size={30} />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <h3 className="font-weight-bold mb-4">Products</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Release Dates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Top Sellers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Member Exclusives
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Outlet
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h3 className="font-weight-bold mb-4">Sports</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Running
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Golf
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Gym & Training
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Football
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Basketball
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Outdoor
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 mb-4 mb-md-0">
                <h3 className="font-weight-bold mb-4">Company Information</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="" className="text-white text-decoration-none">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text:hover-black"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div class="container lastLine">
        <div class="lastLine1">Cookie Settings</div>
        <div class="lastLine1">
          <Link className="footer-pp" to="/privacy-policy">
            Private Policy
          </Link>
        </div>
        <div class="lastLine1">Terms and Conditions</div>
        <div class="lastLine1">&copy; 2023 SS2. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
