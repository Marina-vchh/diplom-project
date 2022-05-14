import React from "react";
import { IStickers } from "../../../mock-data";
import StickerItem from "../stickerItem/StickerItem";
import './stickerItemList.css'

interface IStickerItemList {
   stickersList: IStickers[];
   className: string;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
}

const StickerItemList = ({stickersList, className, onMouseEnter, onMouseLeave, }: IStickerItemList) => {
   return(
      <ul className="sticker-item-list">
         {stickersList.map(({id, src, alt, name, price}) => (<StickerItem id={id} key={id} src={src} alt={alt} name={name} price={price} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />))}
      </ul>
   )
};

export default StickerItemList;