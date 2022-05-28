import { LIKE, REMOVE_STICKER } from "../actions"

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
}

export type TLikeActionTypes = ILikeAction | IRemoveAction;

export const like = (id: number): TLikeActionTypes => {
    return {
        type: LIKE,
        payload: {
            id
        }
    }
}

export const removeSticker = (id: number): TLikeActionTypes => {
    return {
        type: REMOVE_STICKER,
        payload: {
            id
        }
    }
}