import React from "react";
import Button from "../../components/common-components/button/Button";
import Counter from "../counter/Counter";
import "./cart.css"

const Cart = () => {
   return(
      <div className="cart">
         <table className="table">
            <tr>
               <td>Product</td>
               <td>Price</td>
               <td>Quantity</td>
               <td>Total</td>
            </tr>
            <tr>
            </tr>
         </table>
         <Button text="Continue shopping" className="button cart-button" />
       </div>
   )
};

export default Cart;