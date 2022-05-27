import { LIKE } from "../actions"

interface ILikeAction {
    type: typeof LIKE;
    payload: {
        id: number
    };
}

export type TLikeActionTypes = ILikeAction;

export const setLikesArray = (id: number): TLikeActionTypes => {
    return {
        type: LIKE,
        payload: {
            id
        }
    }
}