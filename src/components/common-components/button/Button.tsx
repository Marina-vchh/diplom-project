import React from "react";
import './button.css';

interface IButton {
   text: string;
   className: string;
   children?: React.ReactNode;
   disabled: boolean;
   onClick?: (e:React.MouseEvent<HTMLButtonElement> ) => void;
};

const Button = ({ text, className, children, disabled, onClick }: IButton) => {
   const onClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
      }
   }
   return(
      <button 
         disabled={disabled}
         className={className}
         onClick={onClickAction}>
            {text}
            {children}
      </button>
   )
};

export default Button;