import React from "react";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import LowerHeader from "./LowerHeader";


const Header = () => {
  return (
    <>
      <header className={classes.header__container}>
        {/* Logo + Delivery */}
        <div className={classes.logo__container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>

          <div className={classes.delivery}>
            <FaLocationDot />
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className={classes.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button className={classes.search__icon}>
            <FaSearch size={20} />
          </button>
        </div>

        {/* Orders, Language, Cart */}
        <div className={classes.order__container}>
          <div className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_the_United_States.svg.png"
              alt="US Flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </div>

          <a href="#">
            <p>Hello, Sign In</p>
            <span>Account & Lists</span>
          </a>

          <a href="#">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          <a href="#" className={classes.cart}>
            <IoCartOutline size={45} />
            <span className={classes.cart__count}>0</span>
          </a>
        </div>
      </header>
      <LowerHeader />
    </>
  );
};

export default Header;
