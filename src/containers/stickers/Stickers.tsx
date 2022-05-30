import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "../../components/sticker-components/filter-buttons/FilterButtons";
import Select from "../../components/sticker-components/select/Select";
import { FILTERBUTTONS, IStickers } from "../../mock-data";
import { changeFilter } from "../../redux/actions/filterActionsCreators/filterActionCreators";
import { like, addToCart } from "../../redux/actions/stickersActionsCreators/stickersActionsCreators";
import { filtersSelector } from "../../redux/selectors/filter-selectors/filterSelectors";
import Button from "../../components/common-components/button/Button";
import StickerItemList from "../../components/sticker-components/stickerItemList/StickerItemList";
import { StickerSelector } from "../../redux/selectors/stickers-selectors/stickerSelector";
import HomeButton from "../../components/common-components/button/HomeButton";
import "./stickers.css"

const Stickers = () => {
   const [isActiveSelect, setIsActiveSelect] = useState(false);

   const filter = useSelector(filtersSelector);
   const stickers = useSelector(StickerSelector);

   const dispatch = useDispatch();

   const dispatchedSetLikesArray = useCallback(
      (id: number) => dispatch(like(id)),
      [dispatch]
  );

   const dispatchedFilterChange = useCallback(
      (filter: string) => dispatch(changeFilter(filter)),
      [dispatch]
  );

  const dispatchedAddedToCart = useCallback(
   (id: number) => dispatch(addToCart(id)),
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
  }, [filter, stickers]);

   const filteredStickers = useMemo(() => filterStickers(stickers), [stickers, filterStickers]);

   const handleSelectActive = () => {
     if(!isActiveSelect) {
         setIsActiveSelect(true)
     } else {
        setIsActiveSelect(false)
     }
   };

   const sortStickers = (data: IStickers[], prop: keyof IStickers, dir: boolean = false) => {
      let result = data.sort(function(a, b): any{
         if((dir === false) ? a[prop] < b[prop] : a[prop] > b[prop]) return -1;
      });
      return result;
   };

   return(
      <div className="stickers-field">
         <div className="filter-select-group">
            <FilterButtons className="filter-buttons" 
                           buttons={FILTERBUTTONS} 
                           activeFilter={filter} 
                           filterChange={dispatchedFilterChange}  />
            <Select handleSelectActive={handleSelectActive} 
                    classNameSelect={isActiveSelect ? 'select-body' : 'hidden'} 
                    classNameArrow={isActiveSelect ?  'select__icon select__icon__up' : 'select__icon__down'}
                    sortStickers={sortStickers }/>
         </div>
            <StickerItemList data={filteredStickers}
                             setLikesArray={dispatchedSetLikesArray} 
                             className="sticker-item-list" 
                             classNameButton="button filled-background sticker-item-button"
                             addToCart={dispatchedAddedToCart} />

            <HomeButton
                    text="All stickers" 
                    className="button transparent-background all-stickers-button"
                    onClick={() => {}} /> 
         </div>
   );
};

export default Stickers;