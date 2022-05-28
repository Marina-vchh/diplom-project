import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/common-components/icon/Icon";
import Logo from "../../components/common-components/logo/Logo";
import './header.css'

const Header = () => {
   return (
      <div className="header">
         <Logo />
         <div className="icons">
            <Icon> 
               <button className="header-icon-button header-icon-loop"></button>
               <Link to="/wishlistPage">
                  <button className="header-icon-button header-icon-heart"></button>
               </Link>
               <Link to="/cartPage">
                  <button className="header-icon-button header-icon-store"></button>
               </Link>
            </Icon>
         </div>
      </div>
   )
}

export default Header