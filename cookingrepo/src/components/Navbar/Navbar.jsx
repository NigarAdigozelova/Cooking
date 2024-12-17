import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-lists">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="recipes">Recipes</Link></li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="news">News</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cultures">Cultures</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
