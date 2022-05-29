import React from "react";
import '../button/button-css/button.css';

interface IButton {
   text: string;
   disabled: boolean;
   onClick: ( e: React.MouseEvent<HTMLButtonElement> ) => void;
};

const SubmitButton = ({ text, disabled, onClick }: IButton) => {
   const onClickAction = ( e: React.MouseEvent<HTMLButtonElement> ) => {
      if (disabled) {
        e.preventDefault();
      } else {
         onClick(e);
      }
   }
   return (
      <button 
         disabled={disabled}
         className="button filled-background"
         onClick={ onClickAction }>
            {text}
      </button>
   )
};

export default SubmitButton;