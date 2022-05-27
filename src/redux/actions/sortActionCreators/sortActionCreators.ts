import { SORT_PRICE_LOW_TO_HIGH } from "../actions"

interface ILikeAction {
    type: typeof SORT_PRICE_LOW_TO_HIGH;
    payload: {};
}

export type TSortActionTypes = ILikeAction;

export const sortPriceLowToHigh = (): TSortActionTypes => {
    return {
        type: SORT_PRICE_LOW_TO_HIGH,
        payload: {}
    }
}