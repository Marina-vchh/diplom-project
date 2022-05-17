import React from "react";
import './button.css';

interface IButton {
   text: string;
   className: string;
   chooseSticker?: (id: number) => void;
}

const Button = ({ text, className }: IButton) => {
   return(
      <button className={className}>{text}</button>
   )
};

export default Button;