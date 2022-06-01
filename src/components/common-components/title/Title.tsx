import React from "react";
import "./title.css";

interface ITitle {
   text: string;
   className: string;
};

const Title = ({ text, className }: ITitle) => {
   return (
      <h2 className={className}>{text}</h2>
   );
};

export default Title;