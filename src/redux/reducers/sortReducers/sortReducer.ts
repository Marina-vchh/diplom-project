import { STICKERS } from "../../../mock-data";
import { SORT_PRICE_LOW_TO_HIGH } from "../../actions/actions";
import { TSortActionTypes } from "../../actions/sortActionCreators/sortActionCreators";

const initialState = STICKERS;

export const sortReducer = (state = initialState, { type, payload }: TSortActionTypes) => {
    switch (type) {
        case SORT_PRICE_LOW_TO_HIGH:
            return state.slice().sort(function(a, b) {
               var nameA = a.name.toLowerCase(),
                 nameB = b.name.toLowerCase()
               if (nameA < nameB)
                 return -1
               if (nameA > nameB)
                 return 1
               return 0
             })
        default:
            return state;
    }
};
