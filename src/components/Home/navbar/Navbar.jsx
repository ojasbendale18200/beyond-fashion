import React from "react";
import "../navbar/Navbar.css";
import { MdPersonOutline } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCartAlt } from "react-icons/bi";

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
        <h3>Men</h3>
        <h3>Women</h3>
        <h3>Kids</h3>
        <h3>Unisex</h3>
        <h3>Activity</h3>
      </div>

      <div className="navbar__search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="navbar__login">
        <MdPersonOutline className="navbar__icons" />
        <MdFavoriteBorder className="navbar__icons" />
        <BiCartAlt className="navbar__icons" />
      </div>
    </div>
  );
}

export default Navbar;
