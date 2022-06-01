import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/common-components/icon/Icon";
import { ReactComponent as ReactLogo } from "../../img/logo/logo-header.svg";
import "./header.css";

const Header = () => {
   return (
      <div className="header">
         <ReactLogo />
         <div className="icons">
            <Icon> 
               <button className="header-icon-button header-icon-loop"></button>
               <Link to="/wishlist">
                  <button className="header-icon-button header-icon-heart"></button>
               </Link>
               <Link to="/cart">
                  <button className="header-icon-button header-icon-store"></button>
               </Link>
            </Icon>
         </div>
      </div>
   );
};

export default Header;