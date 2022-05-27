import { LIKE } from "../../actions/actions";
import { TLikeActionTypes } from "../../actions/stickersActionsCreators/stickersActionsCreators";
import { STICKERS, IStickers } from "../../../mock-data";

const initialState = STICKERS;

export const stickerReducer = (state = initialState, { payload, type }: TLikeActionTypes): IStickers[] => {
    switch (type) {
        case LIKE:
            return state.map(sticker => ({ ...sticker, isLike: sticker.id === payload.id ? !sticker.isLike : sticker.isLike }));
        default:
            return state;
    }
};
