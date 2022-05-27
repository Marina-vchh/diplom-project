import React from "react";
import Button from "../../common-components/button/Button";
import './stickerItem.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import {ReactComponent as Heart} from "../../../img/heart/heart.svg";
import { setLikesArray } from "../../../redux/actions/likedActionsCreators/likedActionsCreators";
import { STICKERS } from "../../../mock-data";
import StickerChoose from "../../../containers/stickersChoose/StickersChoose"

interface IPosts {
   data: any;
}
interface IStickerItem {
   id: number;
   userId: number;
   title: string;
   body: string;
   src: string;
   alt: string;
   name: string;
   price: number;
   className: string;
   children?: React.ReactNode;
   setLikesArray?: (id: number) => void;
}

const StickerItem = ({ data }: IPosts) => {

   return(
      <div>
      <ul className="sticker-item-list">
         {data.map((item: any) => {
         return(
            <li className="sticker-item">
            <Heart className="heart" />
            <img src={item.src} alt={item.alt} />
            <div className="sticker-item__info">
               <div className="sticker-item__name">{item.name}</div>
               <div className="sticker-item__price">${item.price}</div>
            </div>
                <NavLink key={item.id} to={`/stickerPage/${item.id}`}> 
                     <Button
                        text="add to cart" 
                        className={"button filled-background sticker-item-button"} 
                         />
                </NavLink>
            </li>
         )}
         )}
      </ul>
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

export default StickerItem;