import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common-components/button/Button";
import "./stickerItem.css";

interface IStickerItem {
   id: number;
   src: string;
   alt: string;
   name: string;
   price: number;
   classNameButton: string;
   classNameButtonLike: string;
   isLike: boolean;
   addToCart: (id: number) => void;
   setLikesArray: (id: number) => void;
};

const StickerItem = ({ id, src, alt, name, price, classNameButton, classNameButtonLike, setLikesArray, addToCart }: IStickerItem ) => {
   return (
      <li className="sticker-item">
            <button className={classNameButtonLike} onClick={() => setLikesArray(id)} />
            <img src={src} alt={alt} />
            <div className="sticker-item__info">
               <div className="sticker-item__name"> {name} </div>
               <div className="sticker-item__price"> ${price}</div>
            </div>
                <Link key={id} to={`/stickers/${id}`}> 
                     <Button
                        text="add to cart" 
                        className={ classNameButton } />
                </Link>
            </li>
   );
};

export default StickerItem;