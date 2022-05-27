import React from "react";
import './button.css';

interface IButton {
   text: string;
   className: string;
   children?: React.ReactNode;
   disabled?: boolean;
   onClick?: (e:React.MouseEvent<HTMLButtonElement> ) => void;
   onMouseEnter?: () => void;
   onMouseLeave?: () => void;
}

const Button = ({ text, className, children, disabled, onClick, onMouseEnter, onMouseLeave }: IButton) => {
   return(
      <button 
         disabled={disabled}
         className={className}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
            {text}
            {children}
      </button>
   )
};

export default Button;