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
        <h3 className="logoooo">Beyond-Fashion</h3>
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
        <Link to="/cart">
          <BiCartAlt className="navbar__icons" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
