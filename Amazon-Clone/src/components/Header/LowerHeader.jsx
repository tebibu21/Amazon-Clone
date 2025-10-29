import React from "react";
import classes from "./Header.module.css";
import { MdOutlineMenu } from "react-icons/md";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul className={classes.lower__menu}>
        <li className={classes.menu__all}>
          <MdOutlineMenu size={22} />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
