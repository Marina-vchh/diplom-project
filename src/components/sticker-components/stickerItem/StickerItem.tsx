import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../common-components/button/Button";
import "./stickerItem.css";

interface IStickerItem {
   id: number;
   src: string;
   alt: string;
   name: string;
   price: number;
   isLike: boolean;
   className: string;
   setLikesArray: (id: number) => void;
};

const StickerItem = ({id, src, alt, name, price, isLike, className, setLikesArray}: IStickerItem) => {
   return (
      <li className="sticker-item">
            <button className={isLike ? "button-like button-active": "button-like"} onClick={() => setLikesArray(id)} />
            <img src={src} alt={alt} />
            <div className="sticker-item__info">
               <div className="sticker-item__name">{name}</div>
               <div className="sticker-item__price">${price}</div>
            </div>
                <NavLink key={id} to={`/stickerPage/${id}`}> 
                     <Button
                        text="add to cart" 
                        className={"button filled-background sticker-item-button"} 
                         />
                </NavLink>
            </li>
   )
};

export default StickerItem;