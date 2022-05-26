import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/common-components/icon/Icon";
import Logo from "../../components/common-components/logo/Logo";
import {ReactComponent as Icon1} from "../../img/header-icons/header-icon1.svg";
import {ReactComponent as Icon2} from "../../img/header-icons/header-icon2.svg";
import {ReactComponent as Icon3} from "../../img/header-icons/header-icon3.svg";
import './header.css'

const Header = () => {
   return (
      <div className="header">
         <Logo />
         <div className="icons">
            <Icon> 
               <Icon1 className="icon-item" />
               <Link to="/wishlistPage">
                  <Icon2 className="icon-item" />
               </Link>
               <Icon3 className="icon-item" />
            </Icon>
         </div>
      </div>
   )
}

export default Header