import React from "react";
import img from "./myLogo.png";
import { IoMdMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  return (
    <>
      <div className="container-nav">
        <nav className="navbar">
          <div className="myLogo">
            <Link to="/">
              {" "}
              <img className="logo" src={img} alt="Rehan" />{" "}
            </Link>
          </div>

          <ul className={Menu ? "navbar-ul active" : "navbar-ul "}>
            <li>
              <Link className="navigate" to="/">
                Home{" "}
              </Link>{" "}
            </li>

            <li>
              <Link className="navigate" to="/business">
                Business{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="navigate" to="/entertainment">
                Entertainment{" "}
              </Link>{" "}
            </li>

            <li>
              <Link className="navigate" to="/health">
                {" "}
                Health{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="navigate" to="/science">
                Science{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="navigate" to="/sports">
                Sports{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="navigate" to="/technology">
                Technology{" "}
              </Link>{" "}
            </li>
          </ul>
        </nav>
        <div className="menu-overlay">
          <IoMdMenu
            onClick={() => setMenu(true)}
            className={Menu ? "menu" : "menu active"}
          />
          <GrClose
            onClick={() => setMenu(false)}
            className={Menu ? "menu active" : "menu"}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
