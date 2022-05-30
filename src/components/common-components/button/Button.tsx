import React from "react";
import "../button/button-css/button.css";

interface IButton {
   text: string;
   className: string;
};

const Button = ({ text, className }: IButton) => {
   return (
      <button className = {className}>
            {text}
      </button>
   );
};

export default Button;