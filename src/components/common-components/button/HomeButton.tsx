import React from "react";
import '../button/button-css/button.css';

interface IButton {
   text: string;
   className: string;
   onClick: () => void;
};

const HomeButton = ({ text, className, onClick }: IButton) => {
   return (
      <button 
         className={className}
         onClick={onClick}>
            {text}
      </button>
   );
};

export default HomeButton;