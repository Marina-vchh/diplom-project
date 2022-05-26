import React, { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { STICKERS, IStickers } from "../../mock-data";
import StickerItem from '../../components/sticker-components/stickerItem/StickerItem';
import Counter from "../../components/choose-components/counter/Counter";
import Title from '../../components/common-components/title/Title';
import Button from '../../components/common-components/button/Button';
import './stickerChoose.css';


// interface IChooseStickers {
//    newStickersArr?: any;
// }

const StickersChoose = ({ data }: { data: any }) => {
   return(
      <div className="sticker-choose">
         <Title text="Quantity" className="title-thin" />
         <div className="counter-button-group">        
            <Counter />
            <NavLink to={"/wishListPage"}>
               <Button text="Add to cart" className="button filled-background" />
            </NavLink>
         </div>
      </div>
   )
};

export default StickersChoose;