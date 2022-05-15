import React from "react";
import './title.css'

interface IProps {
   text: string;
   className: string;
};

const Title = ({ text, className }: IProps) => {
   return (
      <div className={className}>
         <h1 className="title">{text}</h1>
      </div>
   );
};

export default Title;