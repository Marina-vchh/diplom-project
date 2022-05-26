import React, {useEffect, useState, useCallback, useMemo } from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "../../components/sticker-components/filter-buttons/FilterButtons";
import Select from "../../components/sticker-components/select/Select";
import StickerItem from "../../components/sticker-components/stickerItem/StickerItem";
import { FILTERBUTTONS, STICKERS, IStickers } from "../../mock-data";
import { filtersSelector } from "../../redux/selectors/filter-selectors/filterSelectors";
import { changeFilter } from "../../redux/actions/filterActionsCreators/filterActionCreators";
import Button from "../../components/common-components/button/Button";
import ChoosePage from "../../pages/choosePage/ChoosePage";
import StickersChoose from "../stickersChoose/StickersChoose";
import './stickersField.css';
import StickerPage from "../../pages/stickerPage/StickerPage"
interface IPosts {
   data: any;
}

export const StickersField = ({ data: { data } }: IPosts) => {
   const [isHovering, setIsHovering] = useState(false);
   const [isActiveSelect, setIsActiveSelect] = useState(false);

   const newStickersArr = data.splice(0, 9).map((item: any, index: any) => {
      return {...item, ...STICKERS[index]};
   })

   const filter = useSelector(filtersSelector);

   const dispatch = useDispatch();

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

   const filteredStickers = useMemo(() => filterStickers(newStickersArr), [newStickersArr, filterStickers]);

   const handleSelectActive = () => {
     if(!isActiveSelect){
         setIsActiveSelect(true)
     } else {
        setIsActiveSelect(false)
     }
   };
    
   return(
      <div className="stickers-field">
         <div className="filter-select-group">
            <FilterButtons className="filter-buttons" buttons={FILTERBUTTONS} activeFilter={filter} filterChange={dispatchedFilterChange}  />
            <Select handleSelectActive={handleSelectActive} classNameSelect={isActiveSelect ? 'select-body' : 'hidden'} classNameArrow={isActiveSelect ?  'select__icon select__icon__up' : 'select__icon__down'} />
         </div>
         <ul className="sticker-item-list">
            {
               filteredStickers.map((item: any) => {
                     return( 
                        <NavLink key={item.id} to={`/choosePage/${item.id}`}>
                           <StickerItem src={item.src} alt={item.alt} name={item.name} price={item.price} className="button filled-background sticker-item-button"/>
                        </NavLink>
                  )
               })
            }
         </ul>
         <div>
            <Routes>
               { 
                  filteredStickers.map((item: any) => {
                     return <Route key={item.id} path={`${item.id}`} element={<StickersChoose data={item} />} />
                  })
                }
            </Routes>
         </div>
            <Button text="All stickers" className="button transparent-background"/> 
         </div>
   )
};

export default StickersField;

// {isHovering ? 'button filled-background sticker-item-button' : 'hidden'} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}