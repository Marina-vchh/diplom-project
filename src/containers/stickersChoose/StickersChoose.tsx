import React, { useCallback, useMemo, useState } from 'react';
import StickerItemList from "../../components/sticker-components/stickerItemsList/StickerItemList";
import { STICKERS, IStickers } from "../../mock-data";
import { useDispatch, useSelector } from "react-redux";
import { chooseSticker } from "../../redux/actions/chooseActionsCreators/chooseActionCreators";
import { chooseSelector } from "../../redux/selectors/choose-selectors/chooseSelectors";

const StickersChoose = () => {
   return(
      <StickerItemList stickersList={STICKERS} className='' />
   )
};

export default StickersChoose;