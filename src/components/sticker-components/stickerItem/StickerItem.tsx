import React from "react";
import Button from "../../common-components/button/Button";
import './stickerItem.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
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
}

const StickerItem = ({ id, src, alt, name, price, className, onMouseEnter, onMouseLeave }: IStickerItem) => {
   return(
      <li className="sticker-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
         <Link to="/wishlistPage">
            <Heart className="heart" />
         </Link>
         <img src={src} alt={alt} className="sticker-item-img" />
         <Button text={"Add to cart"} className={className} />
         <div className="sticker-item__info">
            <div className="sticker-item__name">{name}</div>
            <div className="sticker-item__price">${price}</div>
         </div>
         <Outlet />
      </li>
   )
};

export default StickerItem;