import { INCREMENT, DECREMENT } from "../../actions/actions";
import { TCounterActionTypes } from "../../actions/counterActionCreators/counterActionCreator";

const initialState = 1;

export const counterReducer = (state = initialState, { type, payload }: TCounterActionTypes) => {
    switch (type) {
        case INCREMENT:
            return state + 1;
         case DECREMENT:
            return state - 1;
        default:
            return state;
    };
};
