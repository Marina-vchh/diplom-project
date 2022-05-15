import React from "react";
import './title.css'

interface IProps {
   text: string;
};

const Title = ({ text }: IProps) => {
   return (
      <div className="title-wrapper">
         <h1 className="title">{text}</h1>
      </div>
   );
};

export default Title;