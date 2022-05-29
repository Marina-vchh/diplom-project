import React from "react";
import Title from "../../components/common-components/title/Title";
import StickerItemList from "../../components/sticker-components/stickerItemList/StickerItemList";
import { STICKERS } from "../../mock-data";
import "./related.css"

const Related = () => {
   const spliceStickers = [...STICKERS].splice(0, 3);
   return(
      <div className="related-stickers-wrapper">
         <Title text="Related Products" className="title-thumbnail"/>
         <StickerItemList data={spliceStickers} setLikesArray={() => {}} className="sticker-item-list__related" classNameButton="button filled-background related-button" />
      </div>
   );
};

export default Related;