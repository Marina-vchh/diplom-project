import React from "react";
import "../button/button-css/button.css";

interface IButton {
   text: string;
   className: string;
   disabled: boolean;
   addToCart?: ( id: number ) => void;
};

const Button = ({ text, className, disabled, addToCart }: IButton) => {
   return (
      <button 
         disabled = {disabled}
         className = {className}
         onClick = {() => addToCart}>
            {text}
      </button>
   );
};

export default Button;