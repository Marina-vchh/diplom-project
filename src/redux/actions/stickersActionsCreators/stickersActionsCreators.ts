import { LIKE, REMOVE_STICKER, ADD_TO_CART } from "../actions"

interface ILikeAction {
    type: typeof LIKE;
    payload: {
        id: number
    };
}

interface IRemoveAction {
    type: typeof REMOVE_STICKER;
    payload: {
        id: number
    };
};
interface IAddToCartAction {
    type: typeof ADD_TO_CART;
    payload: {
        id: number
    };
};

export type TStickerActionTypes = ILikeAction | IRemoveAction | IAddToCartAction;

export const like = (id: number): TStickerActionTypes => {
    return {
        type: LIKE,
        payload: {
            id
        }
    };
};

export const removeSticker = (id: number): TStickerActionTypes => {
    return {
        type: REMOVE_STICKER,
        payload: {
            id
        }
    };
};

export const addToCart = (id: number): TStickerActionTypes => {
    return {
        type: ADD_TO_CART,
        payload: {
            id
        }
    };
};