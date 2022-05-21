import React from "react";
import { IStickers, STICKERS } from "../../../mock-data";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import ChoosePage from "../../../pages/choosePage/ChoosePage";
import StickerItem from "../stickerItem/StickerItem";
import './stickerItemList.css'
// import StickersChoose from "../../../containers/stickersChoose/StickersChoose";

interface IStickerItemList {
   stickersList: IStickers[];
   className: string;
   onMouseEnter?: () => void;
   onMouseLeave?: () => void;
}

const StickerItemList = ({stickersList, className, onMouseEnter, onMouseLeave}: IStickerItemList) => {
   return(
      <>
         <ul className="sticker-item-list">
            {stickersList.map(({id, src, alt, name, price}) => 
            (
            <StickerItem id={id} key={id} src={src} alt={alt} name={name} price={price} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            ))}
         </ul>
      </>
   )
};

export default StickerItemList;