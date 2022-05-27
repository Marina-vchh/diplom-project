import { LIKE } from "../../actions/actions";
import { TLikeActionTypes } from "../../actions/likedActionsCreators/likedActionsCreators";
import { STICKERS, IStickers } from "../../../mock-data";

const initialState = STICKERS;

export const likeReducer = (state = initialState, { type, payload }: TLikeActionTypes) => {
    switch (type) {
        case LIKE:
         return [ ...state ];
        default:
            return state;
    }
};
