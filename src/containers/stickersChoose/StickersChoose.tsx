import React, { useCallback, useMemo, useState } from 'react';
import { STICKERS, IStickers } from "../../mock-data";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../../redux/selectors/counter-selectors/counterSelectors";
import { increment, decrement } from "../../redux/actions/counterActionCreators/counterActionCreator";
import Counter from "../../components/chooseComponents/counter/Counter"


interface IChooseStickers {

}

const StickersChoose = () => {
   const dispatch = useDispatch();
   const count = useSelector(counterSelector);

   const dispatchedIncrement = useCallback(
      () => dispatch(increment()),
      [dispatch]
  );

   const dispatchedDecrement = useCallback(
      () => dispatch(decrement()),
      [dispatch]
   );

   return(
      <>
         <Counter 
            increment={dispatchedIncrement} 
            decrement={dispatchedDecrement}>
               {count}
         </Counter>   
      </>
   )
};

export default StickersChoose;