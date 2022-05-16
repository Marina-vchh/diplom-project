import { CHOOSE } from "../../actions/actions";
import { TChooseActionTypes } from "../../actions/chooseActionsCreators/chooseActionCreators";
import { STICKERS } from "../../../mock-data";

const initialState = STICKERS;

export const chooseReducer = (state = initialState, { type, payload }: TChooseActionTypes) => {
   switch (type) {
       case CHOOSE:
         return state.filter(sticker => sticker.id === payload.id);
       default:
           return state;
   }
}
