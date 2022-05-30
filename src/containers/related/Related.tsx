import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../redux/actions/stickersActionsCreators/stickersActionsCreators";
import { StickerSelector } from "../../redux/selectors/stickers-selectors/stickerSelector";
import Title from "../../components/common-components/title/Title";
import StickerItemList from "../../components/sticker-components/stickerItemList/StickerItemList";
import "./related.css"

const Related = () => {
   const stickers = useSelector(StickerSelector);
   const dispatch = useDispatch();

   const spliceStickers = [...stickers].splice(0, 3);

   const dispatchedSetLikesArray = useCallback(
      (id: number) => dispatch(like(id)),
      [dispatch]
  );

   return (
      <div className="related-stickers-wrapper">
         <Title text="Related Products" className="title-thumbnail"/>
         <StickerItemList data={spliceStickers} 
                          addToCart={() => {}}
                          setLikesArray={dispatchedSetLikesArray} 
                          className="sticker-item-list__related" 
                          classNameButton="button filled-background related-button" />
      </div>
   );
};

export default Related;