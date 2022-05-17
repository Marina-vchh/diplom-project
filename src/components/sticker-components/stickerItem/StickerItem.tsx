import React from "react";
import Button from "../../common-components/button/Button";
import './stickerItem.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Heart} from "../../../img/heart/heart.svg";

interface IStickerItem {
   id: number;
   src: string;
   alt: string;
   name: string;
   price: number;
   className: string;
   onMouseEnter?: () => void;
   onMouseLeave?: () => void;
   chooseSticker?: (id: number) => void;
}

const StickerItem = ({ id, src, alt, name, price, className, onMouseEnter, onMouseLeave, chooseSticker }: IStickerItem) => {
   return(
      <li className="sticker-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
         <Heart className="heart" />
         <img src={src} alt={alt} className="sticker-item-img" />
         <Link to='/choosePage'>
            <Button text={"Add to cart"} className={className} chooseSticker={chooseSticker} />
         </Link>
         <div className="sticker-item__info">
            <div className="sticker-item__name">{name}</div>
            <div className="sticker-item__price">${price}</div>
         </div>
      </li>
   )
};

export default StickerItem;