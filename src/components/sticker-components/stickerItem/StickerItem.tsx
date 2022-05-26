import React from "react";
import Button from "../../common-components/button/Button";
import './stickerItem.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {ReactComponent as Heart} from "../../../img/heart/heart.svg";

interface IStickerItem {
   src: string;
   alt: string;
   name: string;
   price: number;
   className: string;
   onMouseEnter?: () => void;
   onMouseLeave?: () => void;
}

const StickerItem = ({ src, alt, name, price, className, onMouseEnter, onMouseLeave }: IStickerItem) => {
   return(
      <li className="sticker-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
         <Link to="/wishlistPage">
            <Heart className="heart" />
         </Link>
         <Button text="add to cart" className={className}/>
         <img src={src} alt={alt} className="sticker-item-img" />
         <div className="sticker-item__info">
            <div className="sticker-item__name">{name}</div>
            <div className="sticker-item__price">${price}</div>
         </div>
      </li>
   )
};

export default StickerItem;