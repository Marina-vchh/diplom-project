import React, { useCallback } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { STICKERS } from "../../mock-data";
import { StickerSelector } from '../../redux/selectors/stickers-selectors/sticker-selector';
import { like } from '../../redux/actions/stickersActionsCreators/stickersActionsCreators';
import StickerItem from "../../components/sticker-components/stickerItem/StickerItem";
import StickersCart from "../cart/Cart";
import Counter from "../counter/Counter";
import Title from "../../components/common-components/title/Title";
import Button from "../../components/common-components/button/Button";
import "./choose.css";

interface IChooseStickers {
   data: any;
};

const StickersChoose = ({ data : { data } }: IChooseStickers) => {
   const stickers = useSelector(StickerSelector);

   const dispatch = useDispatch();

   const dispatchedSetLike = useCallback(
      (id: number) => dispatch(like(id)),
      [dispatch]
  );

  const chooseItem = [...stickers].filter((item) => item.id === data.id);

   return(
      <div>
         <div className="sticker-choose">
            <div className="sticker-choose-img">
               {
                  chooseItem.map((item) => (
                  <StickerItem id={item.id}
                              src={item.src}
                              alt={item.alt}
                              name={item.name}
                              price={item.price}
                              classNameButtonLike={item.isLike ? "button-like button-active": "button-like"}
                              isLike={item.isLike} 
                              setLikesArray={dispatchedSetLike}
                              classNameButton="hidden" />
            ))
         }
         </div>
         <div className="sticker-choose-group"> 
            <p className="sticker-choose-text">more information about stickers</p>  
            <Title text="Quantity" className="title-thin" />
            <Counter className="sticker-choose-counter" classNameCount="count-filled" classNameButton="sticker-choose-counter-button" />
            {chooseItem.map((item: any) => {
               return(
                  <Link key={item.id} to={`/cartPage/${item.id}`}>
                     <Button disabled={false} text="Add to cart" className="button filled-background choose-button" />
                  </Link>
               )
            })}
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
   );
};

export default StickersChoose;