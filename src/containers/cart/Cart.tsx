import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common-components/button/Button";
import Counter from "../counter/Counter";
import "./cart.css"

const Cart = () => {
   const navigate = useNavigate();

   const goHome = () => navigate('/', {replace: true});

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
         <Button onClick={goHome} text="Continue shopping" className="button transparent-background cart-button" />
       </div>
   )
};

export default Cart;