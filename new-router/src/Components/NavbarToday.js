import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarToday.css";
function NavbarToday() {
  return (
    <div id="nav">
      <NavLink exact to={"/"}>Home</NavLink>
      <NavLink to={"/AboutToday"}>About</NavLink>
      {/* <NavLink to={"/order"}>Order</NavLink> */}
    </div>
  );
}

export default NavbarToday;
