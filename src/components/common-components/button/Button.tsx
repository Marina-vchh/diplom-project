import React from "react";
import './button.css';

interface IButton {
   text: string;
   className: string;
   children?: React.ReactNode;
   onClick?: () => void;
}

const Button = ({ text, className, children, onClick}: IButton) => {
   return(
      <button onClick={onClick} className={className}>{text}
      {children}</button>
   )
};

export default Button;