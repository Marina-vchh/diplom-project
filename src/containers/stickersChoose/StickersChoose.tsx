import React, { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { STICKERS, IStickers } from "../../mock-data";
import StickerItem from '../../components/sticker-components/stickerItemList/StickerItemList';
import Counter from "../counter/Counter";
import Title from '../../components/common-components/title/Title';
import Button from '../../components/common-components/button/Button';
import './stickerChoose.css';


interface IChooseStickers {
   data?: any;
   array?: [];
}

interface IResult {
   data: any;
   name: string;
   price: string;
}



const StickersChoose = ({data: {data}, array}: IChooseStickers) => {
   const stickerItemData = [];
   stickerItemData.push(data);
   
   const stickerItem = stickerItemData.map((item: any, index: any) => {
      return {...item, ...STICKERS[index]};
   });

   return(
      <div className="sticker-choose">
         <Title text="Quantity" className="title-thin" />
         <div className="counter-button-group"> 
            <Counter />
            <NavLink to={"/cartPage"}>
               <Button text="Add to cart" className="button filled-background" />
            </NavLink>
         </div>
      </div>
   )
};

export default StickersChoose;