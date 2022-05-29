import React from "react";
import '../button/button-css/button.css';;

interface IButton {
   text: string;
   className: string;
   children?: React.ReactNode;
   disabled: boolean;
   addToCart?: (id: number) => void;
};

const Button = ({ text, className, children, disabled, addToCart}: IButton) => {
   return(
      <button 
         disabled={disabled}
         className={className}
         onClick={() => addToCart}>
            {text}
            {children}
      </button>
   )
};

export default Button;