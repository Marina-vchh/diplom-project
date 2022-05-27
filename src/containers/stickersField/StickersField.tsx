import React, {useEffect, useState, useCallback, useMemo } from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "../../components/sticker-components/filter-buttons/FilterButtons";
import Select from "../../components/sticker-components/select/Select";
import StickerItem from "../../components/sticker-components/stickerItem/StickerItem";
import { FILTERBUTTONS, STICKERS, IStickers } from "../../mock-data";
import { changeFilter } from "../../redux/actions/filterActionsCreators/filterActionCreators";
import { setLikesArray } from "../../redux/actions/likedActionsCreators/likedActionsCreators";
import { filtersSelector } from "../../redux/selectors/filter-selectors/filterSelectors";
import { LikeSelector } from "../../redux/selectors/like-selectors/like-selector";
import Button from "../../components/common-components/button/Button";
import ChoosePage from "../../pages/choosePage/ChoosePage";
import StickersChoose from "../stickersChoose/StickersChoose";
import './stickersField.css';
import StickerPage from "../../pages/stickerPage/StickerPage";
import {sortPriceLowToHigh} from "../../redux/actions/sortActionCreators/sortActionCreators"

interface IPosts {
   data: any;
}
// export interface INewArr {
//    userId: number;
//    id: number;
//    title: string;
//    body: string;
//    name: string;
//    price: number;
//    src: string;
// };

const StickersField = ({data: {data}}: IPosts) => {
   const [isHovering, setIsHovering] = useState(false);
   const [isActiveSelect, setIsActiveSelect] = useState(false);

   const stickerItems = data.splice(0, 9).map((item: any, index: any) => {
      return {...item, ...STICKERS[index]};
   });

   const filter = useSelector(filtersSelector);

   const dispatch = useDispatch();

   const dispatchedSortArray = useCallback(
      () => dispatch(sortPriceLowToHigh()),
      [dispatch]
  );

   const dispatchedSetLikesArray = useCallback(
      (id: number) => dispatch(setLikesArray(id)),
      [dispatch]
  );

   const dispatchedFilterChange = useCallback(
      (filter: string) => dispatch(changeFilter(filter)),
      [dispatch]
  );

   const filterStickers = useCallback((stickers: IStickers[]) => {
      switch (filter) {
         case 'drink':
              return stickers.filter(item => item.name === 'Coffee');
         case 'eat':
              return stickers.filter(item => item.name === 'Macaroni');
         case 'sign':
               return stickers.filter(item => item.name === 'Sign' || item.name === 'Idea');
         case 'flower':
               return stickers.filter(item => item.name === 'Flower');
         case 'animal':
               return stickers.filter(item => item.name === 'Bear' || item.name === 'Sheep');
         case 'coffee':
               return stickers.filter(item => item.name === 'Coffee');
          default:
              return stickers;
      }
  }, [filter, STICKERS]);

   const filteredStickers = useMemo(() => filterStickers(stickerItems), [stickerItems, filterStickers]);

   const handleSelectActive = () => {
     if(!isActiveSelect){
         setIsActiveSelect(true)
     } else {
        setIsActiveSelect(false)
     }
   };

   console.log(data)

   // const sortStickersLTH = (stickers: INewArr[]) => {
   //    let result = stickers.sort(function(a,b):any{
   //       if(a.price > b.price) 
   //       return -1
   //    });
   //    console.log(result)
   //    return result
   // };

   // const sortStickersZtoA = (data: INewArr[] ) => {
   //    let result = data.sort(function(a,b):any{
   //       if(a.name > b.name) 
   //       return -1
   //    });
   //    return result
   // };

   return(
      <div className="stickers-field">
         <div className="filter-select-group">
            <FilterButtons className="filter-buttons" 
                           buttons={FILTERBUTTONS} 
                           activeFilter={filter} 
                           filterChange={dispatchedFilterChange}  />
            <Select handleSelectActive={handleSelectActive} 
                    classNameSelect={isActiveSelect ? 'select-body' : 'hidden'} 
                    classNameArrow={isActiveSelect ?  'select__icon select__icon__up' : 'select__icon__down'} />
         </div>
         <div>  
            <StickerItem data={filteredStickers}></StickerItem>
         </div>
            <Button text="All stickers" className="button transparent-background"/> 
         </div>
   )
};

export default StickersField;