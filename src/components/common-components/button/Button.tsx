import React from "react";
import './button.css';

interface IButton {
   text: string;
   className: string;
   children?: React.ReactNode;
   disabled?: boolean;
   onClick?: (e:React.MouseEvent<HTMLButtonElement> ) => void;
}

const Button = ({ text, className, children, disabled, onClick }: IButton) => {
   return(
      <button 
         disabled={disabled}
         className={className}
         onClick={onClick}>
            {text}
            {children}
      </button>
   )
};

export default Button;