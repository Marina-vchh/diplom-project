import React, {useState, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../../redux/selectors/counter-selectors/counterSelectors";
import { increment, decrement } from "../../redux/actions/counterActionCreators/counterActionCreator";
import "./counter.css";
import { classNames } from "react-select/dist/declarations/src/utils";

interface ICounter {
   className: string;
   classNameCount: string;
   classNameButton: string;
}

const Counter = ({ className, classNameCount, classNameButton }: ICounter) => {

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
      <div className={className}>
         <button className={classNameButton} onClick={dispatchedIncrement}>+</button>
         <span className={classNameCount}>{count}</span>
         <button className={classNameButton} onClick={dispatchedDecrement}>-</button>
      </div>
   )
}

export default Counter;