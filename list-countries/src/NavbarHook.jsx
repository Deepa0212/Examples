import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";
    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
          List Countries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo-list"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            TodoList
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/photo-list"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            PhotoList
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/infinite-scroll"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            InfiniteScroll
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accordion"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Accordion
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/get-started"
            className={`${linkClassName} ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            Get Started
          </NavLink>
        </li> 
      </ul>
    );
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Navigation Bar
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
           <FontAwesomeIcon className="icon" icon={faBars} />
          </div>
        )}
        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <FontAwesomeIcon className="icon" icon={faBars} />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};
export default NavbarHook;