import { CHOOSE } from "../actions";

interface IChooseSticker {
   type: typeof CHOOSE;
   payload: {
      id: number;
   };
};

export type TChooseActionTypes = IChooseSticker;

export const chooseSticker = (id: number): TChooseActionTypes => {
   return {
       type: CHOOSE,
       payload: {
           id
       }
   }
}