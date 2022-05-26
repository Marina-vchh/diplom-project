import React, {useState, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../../redux/selectors/counter-selectors/counterSelectors";
import { increment, decrement } from "../../redux/actions/counterActionCreators/counterActionCreator";
import "./counter.css";

const Counter = () => {

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
      <div className="counter">
         <button className="button-counter" onClick={dispatchedIncrement}>+</button>
         <span className="count">{count}</span>
         <button className="button-counter" onClick={dispatchedDecrement}>-</button>
      </div>
   )
}

export default Counter;