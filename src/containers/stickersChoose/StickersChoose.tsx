import React, { useCallback, useMemo, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { STICKERS, IStickers } from "../../mock-data";
import StickerItem from '../../components/sticker-components/stickerItem/StickerItem';
import StickersCart from '../StickersCart/StickersCart';
import Counter from "../counter/Counter";
import Title from '../../components/common-components/title/Title';
import Button from '../../components/common-components/button/Button';
import './stickerChoose.css';
import Layout from '../../components/common-components/layout/Layout';


interface IChooseStickers {
   data: any;
}

const StickersChoose = ({ data : { data } }: IChooseStickers) => {
   const chooseItem = [...STICKERS].filter((item) => item.id === data.id);

   console.log(chooseItem[0].name)
   
   return(
      <div>
         <Layout />
         <div className="sticker-choose">
            <div className="sticker-choose-img">
               {
                  chooseItem.map((item) => (
                  <StickerItem id={item.id}
                              src={item.src}
                              alt={item.alt}
                              name={item.name}
                              price={item.price}
                              isLike={item.isLike} 
                              setLikesArray={(id: number) => {}}
                              classNameButton="hidden" />
            ))
         }
         </div>
         <div className="sticker-choose-group"> 
            <p className="sticker-choose-text">more information about stickers</p>  
            <Title text="Quantity" className="title-thin" />
            <Counter className="sticker-choose-counter" classNameCount="count-filled" classNameButton="sticker-choose-counter-button" />
            <NavLink to={"/cartPage"}>
               <Button text="Add to cart" className="button filled-background choose-button" />
            </NavLink>
         </div>
      </div>
      <div>
         <Routes>
                  { 
                     chooseItem.map((item: any) => {
                        return <Route key={item.id} path={`${item.id}`} element={<StickersCart data={item} />} />
                     })
                  }
         </Routes>
      </div>
      </div>
   )
};

export default StickersChoose;