import React from "react";
import Button from "../../common-components/button/Button";
import './stickerItem.css';

interface IStickerItem {
   id: number;
   src: string;
   alt: string;
   name: string;
   price: number;
   className: string;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
}

const StickerItem = ({id, src, alt, name, price, className, onMouseEnter, onMouseLeave}: IStickerItem) => {
   return(
      <li className="sticker-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
         <img src={src} alt={alt} className="sticker-item-img" />
         <Button text={"Add to cart"} className={className} />
         <div className="sticker-item__info">
            <div className="sticker-item__name">{name}</div> 
            <div className="sticker-item__price">${price}</div>
         </div>
      </li>
   )
};

export default StickerItem;