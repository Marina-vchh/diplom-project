import React from "react";
import Header from "../header/Header";
import TitleMain from "../../components/common-components/title-main/TitleMain";
import './background.css';

interface IBackground {
   titleText: string;
   titleTextClassname: string;
   className: string;
}

const Background = ({titleText, className, titleTextClassname}: IBackground) => {
   return (
      <div className={className}>
         <Header />
         <TitleMain text={titleText} className={titleTextClassname} />
      </div>
   )
}

export default Background;