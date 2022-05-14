import React from "react";
import Icon from "../../components/common-components/icon/Icon";
import { ReactComponent as TwitterIcon } from "../../img/footer-icons/twitter.svg";
import { ReactComponent as WhatsUpIcon } from "../../img/footer-icons/whatsUp.svg";
import { ReactComponent as TelegramIcon } from "../../img/footer-icons/telegram.svg";
import { ReactComponent as FacebookIcon } from "../../img/footer-icons/facebook.svg";
import Logo from "../../components/common-components/logo/Logo";
import './footer.css'

const Footer = () => {
   return(
      <div className="footer">
         <Logo />
         <Icon>
            <TwitterIcon />
            <WhatsUpIcon />
            <TelegramIcon />
            <FacebookIcon />
         </Icon>
      </div>
   )
}

export default Footer;