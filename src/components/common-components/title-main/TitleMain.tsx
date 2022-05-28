import React from "react";
import "./titleMain.css"

interface ITitleMain {
   text: string;
};

const TitleMain = ({ text }: ITitleMain) => {
   return (
      <div className="title-main-wrapper">
         <h1 className="title-main">{text}</h1>
      </div>
   );
};

export default TitleMain;