import React from "react";
import Header from "../header/Header";
import Title from "../../components/common-components/title/Title";
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
         <Title text={titleText} className={titleTextClassname} />
      </div>
   )
}

export default Background;