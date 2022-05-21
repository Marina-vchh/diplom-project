import { INCREMENT, DECREMENT } from "../actions";

interface IIncrement {
   type: typeof INCREMENT;
   payload: {}
};

interface IDecrement {
   type: typeof DECREMENT;
   payload: {}
};

export type TCounterActionTypes = IIncrement | IDecrement;

export const increment = (): TCounterActionTypes => {
   return {
       type: INCREMENT,
       payload: {

       }
   }
};

export const decrement = (): TCounterActionTypes => {
   return {
       type: DECREMENT,
       payload: {

       }
   }
};