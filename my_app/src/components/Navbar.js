import React from "react";
import logo from "./logo.jpg";
import cart from "./cart.jpg";
import profile from "./profile.jpg";

const Navbar = () => {
  const search = () => {
    // Define your search function here
  };

  return (
    <header>
      <div className="top-row">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="CivilMart Logo" style={{ height: "50px" }} />
          </a>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products"
            id="searchInput"
          />
          <button onClick={search}>Search</button>
        </div>
        <div className="nav-links">
          <a href="retailer_zone.html" className="button-link">
            Retailer Zone
          </a>
          <a href="cart.html" className="button-link">
            <img src={cart} alt="Cart" />
            Cart
          </a>
          <a href="profile.html" className="button-link">
            <img src={profile} alt="User Profile" />
            Profile
          </a>
        </div>
      </div>
      <nav className="category-row">
        <a href="cement_steel.html" className="category">
          Cement &amp; Steel
        </a>
        <a href="electricals.html" className="category">
          Electricals
        </a>
        <a href="plumbing.html" className="category">
          Plumbing
        </a>
        <a href="tiles_granite.html" className="category">
          Tiles &amp; Granite
        </a>
        <a href="chemicals.html" className="category">
          Chemicals
        </a>
        <a href="interiors.html" className="category">
          Interiors
        </a>
        <a href="ceramics.html" className="category">
          Ceramics
        </a>
        <a href="paints.html" className="category">
          Paints
        </a>
        <a href="tools.html" className="category">
          Tools
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
