import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMenu, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
// import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
   
     const closeMenuOnMobile = () => {
       if (window.innerWidth <= 1150) {
         setShowMenu(false);
       }
     };

 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
         Navigation Bar
       </NavLink>

       <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
             List Countries
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/todo-list" className="nav__link" onClick={closeMenuOnMobile}>
             TodoList
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/photo-list"
               className="nav__link"
               onClick={closeMenuOnMobile}
             >
               PhotoList
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/infinite-scroll"
               className="nav__link"
               onClick={closeMenuOnMobile}
             >
               InfiniteScroll
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/accordion"
               className="nav__link"
               onClick={closeMenuOnMobile}
             >
               Accordion
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/get-started" className="nav__link nav__cta">
               Get Started
             </NavLink>
           </li>
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <FontAwesomeIcon className="icon" icon={faXmark} />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         <FontAwesomeIcon className="icon" icon={faBars} />
       </div>
     </nav>
   </header>
 );
};

export default Navbar;