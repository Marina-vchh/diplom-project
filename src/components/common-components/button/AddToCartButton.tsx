import React from "react";
import "../button/button-css/button.css";

interface IButton {
   id: number;
   text: string;
   className: string;
   disabled: boolean;
   addToCart: (id: number) => void;
};

const AddToCartButton = ({ id, text, className, disabled, addToCart }: IButton) => {
   return (
      <button 
         disabled = {disabled}
         className = {className}
         onClick = {() => {addToCart(id)}}>
            {text}
      </button>
   );
};

export default AddToCartButton;