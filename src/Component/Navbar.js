import React from "react";
// import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function Navbar() {
  // const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-white fs-3" href="#">
            Ecommerce Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1">
                <button type="button" className="btn btn-dark">
                  Login
                </button>
              </li>
              <li className="nav-item mx-1">
                <button type="button" className="btn btn-dark">
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
