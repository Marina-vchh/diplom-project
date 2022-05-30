import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../../redux/selectors/counter-selectors/counterSelectors";
import { increment, decrement } from "../../redux/actions/counterActionCreators/counterActionCreator";

interface ICounter {
   className: string;
   classNameCount: string;
   classNameButton: string;
}
 
const Counter = ({ className, classNameCount, classNameButton }: ICounter) => {
   const [disabled, setDisabled] = useState(false);

   const count = useSelector(counterSelector);
   const dispatch = useDispatch();

   const dispatchedIncrement = useCallback(
      () => dispatch(increment()),
      [dispatch]
   );

   const dispatchedDecrement = useCallback(
      () => dispatch(decrement()),
      [dispatch]
   );

   const isValid = () => {
      if(count <= 1) {
         return setDisabled(true)
      } else {
         setDisabled(false)
         dispatchedDecrement()
      };
   };

   return (
      <div className={className}>
         <button className={classNameButton} onClick={dispatchedIncrement}>+</button>
         <span className={classNameCount}>{count}</span>
         <button className={classNameButton} onClick={isValid} disabled={disabled}>-</button>
      </div>
   );
};

export default Counter;