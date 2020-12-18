import React, { useState } from "react";
import "./nav.scss";
import settings from "./res/settings.png";
import search from "./res/search.png";
import account from "./res/account.png";
import orders from "./res/orders.png";
import cart from "./res/cart.png";

function Nav() {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };

  return (
    <>
      <div className="shadow">
        <div className="nav">
          <div className="nav-icon">
            <img src={settings} alt="" />
          </div>

          <div className="search" id="search">
            <input type="text" placeholder="Search" />
            <img src={search} id="search-icon" alt="" />
          </div>

          <div className="right-links">
            <div className="nav-icon" id="srchsmall">
              <img src={search} id="search-icon" alt="" />
            </div>

            <div className="dropdown" onClick={toggle}>
              <div className="nav-icon">
                <img src={account} alt="" />
                <a className="dropbtn" href>Account</a>
              </div>
              <div
                className="dropdown-content"
                style={{ display: state ? "block" : "none" }}
              >
                <a href>Account</a>
                <a href>Help</a>
                <a href>Give Feedback</a>
                <a href>Log Out</a>
              </div>
            </div>

            <div className="nav-icon">
              <img src={orders} alt="" />
              <a href>Order</a>
            </div>

            <div className="nav-icon">
              <img src={cart} alt="" />
              <a href>Cart</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
