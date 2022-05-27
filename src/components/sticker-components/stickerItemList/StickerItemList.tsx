import React, {useState, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common-components/button/Button";
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { IStickers, STICKERS } from "../../../mock-data";
import StickerChoose from "../../../containers/stickersChoose/StickersChoose";
import StickerItem from "../stickerItem/StickerItem";
import './stickerItemList.css';

interface IPosts {
   data: IStickers[];
   setLikesArray: (id: number) => void;
}

const StickerItemList = ({data, setLikesArray}: IPosts) => {
   return(
      <div>
      <ul className="sticker-item-list">
         {data.map(({id, src, alt, name, price, isLike}) => {
         return(
            <StickerItem id={id}
                         key={id}
                         src={src} 
                         alt={alt} 
                         name={name} 
                         price={price} 
                         isLike={isLike} 
                         setLikesArray={setLikesArray} />
         )}
         )}
      </ul>
      {console.log(data)}
      <Routes>
               { 
                  data.map((item: any) => {
                     return <Route key={item.id} path={`${item.id}`} element={<StickerChoose array={item} />} />
                  })
                }
      </Routes>
      </div>
   )
};

export default StickerItemList;