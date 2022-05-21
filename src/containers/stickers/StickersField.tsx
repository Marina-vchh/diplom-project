import React, {useEffect, useState, useCallback, useMemo, } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "../../components/sticker-components/filter-buttons/FilterButtons";
import Select from "../../components/sticker-components/select/Select";
import StickerItemList from "../../components/sticker-components/stickerItemsList/StickerItemList";
import { FILTERBUTTONS, STICKERS, IStickers } from "../../mock-data";
import { filtersSelector } from "../../redux/selectors/filter-selectors/filterSelectors";
import { changeFilter } from "../../redux/actions/filterActionsCreators/filterActionCreators";
import Button from "../../components/common-components/button/Button";
import './stickersField.css';



const StickersField = () => {
   const [isHovering, setIsHovering] = useState(false);
   const [isActiveSelect, setIsActiveSelect] = useState(false);

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

  const filteredStickers = useMemo(() => filterStickers(STICKERS), [STICKERS, filterStickers]);

  const handleSelectActive = () => {
     if(!isActiveSelect){
         setIsActiveSelect(true)
     } else {
        setIsActiveSelect(false)
     }
  }
    
   return(
      <div className="stickers-field">
         <div className="filter-select-group">
            <FilterButtons className="filter-buttons" buttons={FILTERBUTTONS} activeFilter={filter} filterChange={dispatchedFilterChange}  />
            <Select handleSelectActive={handleSelectActive} classNameSelect={isActiveSelect ? 'select-body' : 'hidden'} classNameArrow={isActiveSelect ?  'select__icon select__icon__up' : 'select__icon__down'} />
         </div>
         <StickerItemList stickersList={filteredStickers} className={isHovering ? 'button filled-background sticker-item-button' : 'hidden'} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}/>
         <Button text="All stickers" className="button transparent-background" /> 
      </div>
   )
};

export default StickersField;