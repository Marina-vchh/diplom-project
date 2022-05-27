import React, {useState} from "react";
import Title from "../../components/common-components/title/Title";
import StickerItemList from "../../components/sticker-components/stickerItemList/StickerItemList";
import { STICKERS, IStickers } from "../../mock-data";
import "./relatedStickers.css"

const RelatedStickers = () => {
   const spliceStickers = STICKERS.splice(0, 3)
   return(
      <div className="related-stickers-wrapper">
         <Title text="Related Products" className="title-thumbnail"/>
         <StickerItemList data={spliceStickers} setLikesArray={() => {}} className="sticker-item-list__related" />
      </div>
   )
};

export default RelatedStickers;