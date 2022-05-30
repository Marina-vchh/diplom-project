import React from "react";
import Icon from "../../components/common-components/icon/Icon";
import { ReactComponent as TwitterIcon } from "../../img/footer-icons/twitter.svg";
import { ReactComponent as WhatsUpIcon } from "../../img/footer-icons/whatsUp.svg";
import { ReactComponent as TelegramIcon } from "../../img/footer-icons/telegram.svg";
import { ReactComponent as FacebookIcon } from "../../img/footer-icons/facebook.svg";
import { ReactComponent as ReactLogo } from "../../../img/logo/logo-header.svg";
import Title from "../../components/common-components/title/Title";
import './footer.css'

const Footer = () => {
   return (
      <div className="footer">
         <ReactLogo />
         <div>
         <Title text="Follow us" className="title-footer" />
         <Icon>
            <TwitterIcon />
            <WhatsUpIcon />
            <TelegramIcon />
            <FacebookIcon />
         </Icon>
         </div>
      </div>
   );
};

export default Footer;