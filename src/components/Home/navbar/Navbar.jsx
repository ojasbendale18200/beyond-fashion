import React from "react";
import "../navbar/Navbar.css";
import { MdPersonOutline } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="https://cdn.staticans.com/image/catalog/Columbia/logo/116-2022_07_27-logo_main.png"
          alt=""
        />
      </div>

      <div className="navbar__list">
        <Link to="/productsMen" className="allLinks">
          <h3>Men</h3>
        </Link>
        <Link to="/productsWomen" className="allLinks">
          <h3>Women</h3>
        </Link>
        <Link to="/" className="allLinks">
          <h3>Kids</h3>
        </Link>
        <Link to="/" className="allLinks">
          <h3>Unisex</h3>
        </Link>
        <Link to="/" className="allLinks">
          <h3>Actvity</h3>
        </Link>
      </div>

      <div className="navbar__search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="navbar__login">
        <Link to="/register">
          <MdPersonOutline className="navbar__icons" />
        </Link>
        <MdFavoriteBorder className="navbar__icons" />
        <BiCartAlt className="navbar__icons" />
      </div>
    </div>
  );
}

export default Navbar;
