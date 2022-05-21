import React from "react";
import './button.css';

interface IButton {
   text: string;
   className: string;
   children?: React.ReactChild
}

const Button = ({ text, className, children}: IButton) => {
   return(
      <button className={className}>{text}
      {children}</button>
   )
};

export default Button;