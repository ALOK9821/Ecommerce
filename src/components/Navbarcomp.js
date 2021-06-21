import React from "react";
import Signin from "./Signin";
const Navbarcomp = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          xyz mobiles
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active mx-2">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href={Signin}>
                SignIn
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#">
                CART
              </a>
            </li>
           </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbarcomp;
