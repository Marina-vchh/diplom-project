import { LIKE, REMOVE_STICKER, ADD_TO_CART } from "../../actions/actions";
import { TStickerActionTypes } from "../../actions/stickersActionsCreators/stickersActionsCreators";
import { STICKERS, IStickers } from "../../../mock-data";

const initialState = STICKERS;

export const stickerReducer = (state = initialState, { payload, type }: TStickerActionTypes): IStickers[] => {
    switch (type) {
        case LIKE:
            return state.map(sticker => ({ ...sticker, isLike: sticker.id === payload.id ? !sticker.isLike : sticker.isLike }));
        case REMOVE_STICKER:
            return state.filter(sticker => sticker.id !== payload.id);
        case ADD_TO_CART: 
            return state.map(sticker => ({ ...sticker, addedToCart: sticker.id === payload.id ? !sticker.addedToCart : sticker.addedToCart }));
        default:
            return state;
    };
};
