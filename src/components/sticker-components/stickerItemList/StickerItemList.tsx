import React from "react";
import { Route, Routes } from 'react-router-dom';
import { IStickers } from "../../../mock-data";
import StickerChoose from "../../../containers/choose/Choose";
import StickerItem from "../stickerItem/StickerItem";
import './stickerItemList.css';

interface IPosts {
   data: IStickers[];
   className: string;
   classNameButton: string;
   setLikesArray: (id: number) => void;
   addToCart: (id: number) => void;
}

const StickerItemList = ({ data, className, classNameButton, setLikesArray, addToCart }: IPosts ) => {
   return(
      <div>
      <ul className={ className }>
         {data.map(( { id, src, alt, name, price, isLike } ) => {
         return (
            <StickerItem id={id}
                         key={id}
                         src={src} 
                         alt={alt} 
                         name={name} 
                         price={price} 
                         classNameButton={classNameButton}
                         classNameButtonLike={isLike ? "button-like button-active": "button-like" }
                         isLike = { isLike } 
                         setLikesArray = { setLikesArray }
                         addToCart = {addToCart}/>
         )}
         )}
      </ul>
      <Routes>
               { 
                  data.map(( item: any ) => {
                     return <Route key={item.id} path={`${item.id}`} element={<StickerChoose data={item} />} />
                  })
                }
      </Routes>
      </div>
   )
};

export default StickerItemList;