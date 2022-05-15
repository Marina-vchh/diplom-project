import React from "react";
import Button from "../../common-components/button/Button";
import './stickerItem.css';
import OrderPage from '../../../pages/orderPage/OrderPage'
import { Link } from 'react-router-dom';

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

const StickerItem = ({ id, src, alt, name, price, className, onMouseEnter, onMouseLeave }: IStickerItem) => {
   return(
      <li className="sticker-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
         <img src={src} alt={alt} className="sticker-item-img" />
         <Button text={"Add to cart"} className={className}></Button>
         <div className="sticker-item__info">
            <div className="sticker-item__name">{name}</div> 
            <div className="sticker-item__price">${price}</div>
         </div>
         <button><Link to='/orderPage'></Link></button>
      </li>
   )
};

export default StickerItem;