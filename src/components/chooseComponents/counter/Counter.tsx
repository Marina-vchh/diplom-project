import React, {useState} from "react";
import "./counter.css"

interface ICounter {
   children: React.ReactNode;
   increment: () => void;
   decrement: () => void;
}

const Counter = ({increment, decrement, children}: ICounter) => {

   return(
      <div className="counter">
         <button className="button-counter" onClick={increment}>+</button>
         <span className="count">{children}</span>
         <button className="button-counter" onClick={decrement}>-</button>
      </div>
   )
}

export default Counter;