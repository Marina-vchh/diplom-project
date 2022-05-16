import React, {useState, useCallback, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "../../components/sticker-components/filter-buttons/FilterButtons";
import Select from "../../components/sticker-components/select/Select";
import StickerItemList from "../../components/sticker-components/stickerItemsList/StickerItemList";
import { FILTERBUTTONS, STICKERS, IStickers } from "../../mock-data";
import { filtersSelector } from "../../redux/selectors/filter-selectors/filterSelectors";
import { changeFilter } from "../../redux/actions/filterActionsCreators/filterActionCreators";
import Button from "../../components/common-components/button/Button";
import './stickersField.css';
import { chooseSticker } from "../../redux/actions/chooseActionsCreators/chooseActionCreators";
import { chooseSelector } from "../../redux/selectors/choose-selectors/chooseSelectors";

const StickersField = () => {
   const [isHovering, setIsHovering] = useState(false);

   const filter = useSelector(filtersSelector);

   const dispatch = useDispatch();

   const dispatchedChooseStickers = useCallback(
      (id: number) => dispatch(chooseSticker(id)),
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

  const filteredStickers = useMemo(() => filterStickers(STICKERS), [STICKERS, filterStickers]);
   
   return(
      <div className="stickersField">
         <div className="filter-select-group">
            <FilterButtons className="filter-buttons" buttons={FILTERBUTTONS} activeFilter={filter} filterChange={dispatchedFilterChange}  />
            <Select />
         </div>
         <StickerItemList stickersList={filteredStickers} className={isHovering ? 'button filled-background sticker-item-button' : 'hidden'} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} chooseSticker={dispatchedChooseStickers} />
         <Button text="All stickers" className="button transparent-background" /> 
      </div>
   )
};

export default StickersField;